import { cloneDeep } from 'lodash';
import { enVariables } from './env';

function normalizePort(val: string) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

export const settings = {
    port: normalizePort(process.env.PORT || '8007'),
    production: false,
    env: 'development',
    pamlight: {
        projectId: '5dc80b237eb1dc000438c02f',
        projectKey: enVariables.projectSecret
    }
};

// for production environment to read and modify
export const envConfig = cloneDeep(settings);
