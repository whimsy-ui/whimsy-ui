import { Command } from 'commander';
// import inquirer from 'inquirer';
// import fs from 'fs-extra';
// import chalk from 'chalk';
const cmd = new Command();

export const cli = () => {
  cmd
    .version('1.0.0')
    .description('CLI tool for quickly creating TypeScript and Vue templates')
    .command('create [name]')
    .alias('c')
    .description('Create a new project')
    .option('-t, --typescript', 'Use TypeScript')
    .option('-v, --vue', 'Use Vue')
    .action((name, options) => {
      console.log('Creating project...');
      console.log(`Project name: ${name}`);
      console.log(`TypeScript: ${options.typescript}`);
      console.log(`Vue: ${options.vue}`);
    });
  cmd.parse();
};
cli();
