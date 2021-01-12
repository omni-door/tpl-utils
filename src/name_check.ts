import chalk from 'chalk';
import validateProjectName from 'validate-npm-package-name';
import { logErr } from './logger';

function name_check (name: string) {
  const validationResult = validateProjectName(name);
  if (!validationResult.validForNewPackages) {
    const pkjName = chalk.green(`"${name}"`);
    logErr(`根据 npm 的规定，${pkjName} 是非法的项目名(The ${pkjName} is invalid project name because of npm naming restrictions):`);
    [
      ...(validationResult.errors || []),
      ...(validationResult.warnings || []),
    ].forEach((e, k) => logErr(`${k + 1}. ${e}`));
    process.exit(0);
  }
}

export default name_check;