import { spawn } from 'child_process';
import { projRoot } from '@whimsy-ui/build-utils';

export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    console.log(`run: ${cmd} ${args.join(' ')}`);
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    const onProcessExit = () => app.kill('SIGHUP');

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit);

      if (code === 0) resolve();
      else reject(new Error(`Command failed. \n Command: ${command} \n Code: ${code}`));
    });
    process.on('exit', onProcessExit);
  });
