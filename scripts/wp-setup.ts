/**
 * WordPress Setup
 */

/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */

import {execSync} from 'child_process';
import setUpConfig from '../wp-setup.config';

console.log(setUpConfig);
if (typeof setUpConfig !== 'object') {
  console.error('No config');
  process.exit(0);
}

const runWpCli = (command = '') => {
  try {
    const result = execSync(
      `COMPOSE_PROJECT_NAME=my-project wp-env run cli wp ${command}`
    );
    console.log(result.toString());
  } catch (error) {
    console.log('[ERROR]', error);
  }
};

if (setUpConfig && setUpConfig.hasOwnProperty('lang')) {
  console.log('Install language');
  runWpCli(`language core install ${setUpConfig.lang}`);
  runWpCli(`language core activate ${setUpConfig.lang}`);
}

if (setUpConfig && setUpConfig.hasOwnProperty('theme')) {
  console.log('Activate theme');
  runWpCli(`theme activate ${setUpConfig.theme}`);
}

if (setUpConfig && setUpConfig.hasOwnProperty('options')) {
  console.log('Update wp options');
  const {options} = setUpConfig;
  (Object.keys(options) as Array<keyof typeof options>).forEach(optionName => {
    runWpCli(`option update ${optionName} ${options[optionName]}`);
  });
}
