import path from 'path';
import { parallel, series, src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import cleanCss from 'gulp-clean-css';
import { wsOutput } from '@whimsy-ui/build-utils';
const distFolder = path.resolve(__dirname, 'dist');
const srcFolder = path.resolve(__dirname, 'src');
const bundleFolder = path.resolve(wsOutput, 'themes');
const copyThemesBundle = () => {
  return src(`${distFolder}/**`).pipe(dest(bundleFolder));
};
const copyThemesSource = () => {
  return src(`${srcFolder}/**`).pipe(dest(path.resolve(bundleFolder, 'src')));
};
// 打包样式文件
function buildThemes() {
  // 创建scss编译器
  const sass = gulpSass(dartSass);

  return src(path.resolve(__dirname, 'src/**/*.scss'))
    .pipe(
      // 编译
      sass.sync()
    )
    .pipe(
      // 压缩
      cleanCss({}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize / 1000} KB -> ${details.stats.minifiedSize / 1000} KB`);
      })
    )
    .pipe(dest(distFolder));
}
export const build = parallel(copyThemesSource, series(buildThemes, copyThemesBundle));

export default build;
