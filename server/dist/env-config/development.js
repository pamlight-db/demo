"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const env_1 = require("./env");
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
exports.settings = {
    port: normalizePort(process.env.PORT || '8007'),
    production: false,
    env: 'development',
    pamlight: {
        projectId: '5dc80b237eb1dc000438c02f',
        projectKey: env_1.enVariables.projectSecret
    }
};
// for production environment to read and modify
exports.envConfig = lodash_1.cloneDeep(exports.settings);
