import { Project } from 'ts-morph';
import path from 'path';
import { mkdir, readFile, writeFile } from 'fs/promises';
import * as vueCompiler from 'vue/compiler-sfc';
import { projRoot, buildOutput, pkgRoot, wsRoot } from '@whimsy-ui/build-utils';
import { excludeFiles } from '@whimsy-ui/build-utils';
import glob from 'fast-glob';
import type { CompilerOptions, SourceFile } from 'ts-morph';
import { pathRewriter } from '../utils';
const outDir = path.resolve(buildOutput, 'types');
const tsConfigFilePath = path.resolve(projRoot, 'tsconfig.web.json');

export const generateTypesDefinitions = async () => {
  const compilerOptions: CompilerOptions = {
    emitDeclarationOnly: true,
    outDir,
    baseUrl: projRoot,
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false
  };
  const project = new Project({
    compilerOptions,
    tsConfigFilePath,
    skipAddingFilesFromTsConfig: true
  });
  // 统一将目录下的文件转换为ts/ js 文件
  const sourceFiles = await addSourceFiles(project);
  project.resolveSourceFileDependencies();
  console.log('Added source files');
  typeCheck(project);

  console.log('type check passed');
  // 输出类型文件
  await project.emit({
    emitOnlyDtsFiles: true
  });

  const tasks = sourceFiles.map(async (sourceFile) => {
    const relativePath = path.relative(pkgRoot, sourceFile.getFilePath());
    console.log(`Generating definition for file: ${relativePath}`);

    const emitOutput = sourceFile.getEmitOutput();
    const emitFiles = emitOutput.getOutputFiles();
    if (emitFiles.length === 0) {
      throw new Error(`Emit no file: ${relativePath}`);
    }

    const subTasks = emitFiles.map(async (outputFile) => {
      const filepath = outputFile.getFilePath();
      await mkdir(path.dirname(filepath), {
        recursive: true
      });

      await writeFile(filepath, pathRewriter('esm')(outputFile.getText()), 'utf8');

      console.log(`Definition for file: ${relativePath} generated`);
    });

    await Promise.all(subTasks);
  });

  await Promise.all(tasks);
};
async function addSourceFiles(project: Project) {
  project.addSourceFileAtPath(path.resolve(projRoot, 'typings/env.d.ts'));
  const globSourceFile = '**/*.{js?(x),ts?(x),vue}';
  //获取 packages中的所有文件 并排除whimsy-ui目录
  const filePaths = excludeFiles(
    await glob([globSourceFile, '!whimsy-ui/**/*'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  );
  // 获取whimsy-ui目录
  const wsPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: wsRoot,
      onlyFiles: true
    })
  );

  const sourceFiles: SourceFile[] = [];

  // 准备工作 做完 开始解析出类型文件

  await Promise.all([
    ...filePaths.map(async (filePath) => {
      // 对于vue的单文件组件
      if (filePath.endsWith('.vue')) {
        const content = await readFile(filePath, 'utf-8');
        const hasTsNoCheck = content.includes('@ts-nocheck');

        const sfc = vueCompiler.parse(content);
        const { script, scriptSetup } = sfc.descriptor;

        if (script || scriptSetup) {
          let content = (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '');
          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx'
            });
            content += compiled.content;
          }
          // 判断语言，优先判断scriptSetup
          const lang = scriptSetup?.lang || script?.lang || 'js';
          // 将.vue 文件转化为.ts 结尾的文件
          const sourcefile = project.createSourceFile(`${path.relative(process.cwd(), filePath)}.${lang}`, content);
          sourceFiles.push(sourcefile);
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(filePath);
        sourceFiles.push(sourceFile);
      }
    }),
    ...wsPaths.map(async (filepath) => {
      const content = await readFile(path.resolve(wsRoot, filepath), 'utf-8');
      sourceFiles.push(project.createSourceFile(path.resolve(pkgRoot, filepath), content));
    })
  ]);
  return sourceFiles;
}
// 类型检查
function typeCheck(project: Project) {
  // 收集诊断
  const diagnostics = project.getPreEmitDiagnostics();
  // 如果有类型错误 抛出
  if (diagnostics.length > 0) {
    console.log(project.formatDiagnosticsWithColorAndContext(diagnostics));
    const err = new Error('Failed to generate dts.');
    console.log(err);
    throw err;
  }
}
