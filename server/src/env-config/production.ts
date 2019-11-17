import { envConfig } from './development';

envConfig.production = true;
envConfig.env = 'production';

export const settings = envConfig;
