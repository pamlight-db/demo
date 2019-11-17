const fs = require('fs-extra');

module.exports = (env) => {
    env = env || 'development';
    const supportedEnvs = [ 'production', 'development' ];

    // must be one of the supported environments
    if (supportedEnvs.indexOf(env) < 0) {
        throw Error(env + ' is not a supported environments');
    }

    const envText = `export * from './${env}';`;
    fs.writeFileSync('./src/env-config/index.ts', envText);

    console.log('Environment is set to "' + env + '" for demo app server.');
}
