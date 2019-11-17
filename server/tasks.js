const argv = require('minimist')(process.argv.slice(2));
const { execSync } = require('child_process');
const tasks = require('./tasks/index');
const fs = require('fs-extra');

switch (argv['n']) {
    case 'setEnv': {
        return tasks.setEnvironmentType(argv['c']);
    }

    default: {
        throw new Error('Invalid task selected');
    }
}
