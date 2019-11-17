import { envConfig } from './development';

envConfig.production = true;
envConfig.env = 'production';
envConfig.pamlight.projectKey = process.env.PROJECT_KEY;

export const settings = envConfig;
