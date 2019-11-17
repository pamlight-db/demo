"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = require("./development");
development_1.envConfig.production = true;
development_1.envConfig.env = 'production';
development_1.envConfig.pamlight.projectKey = process.env.PROJECT_KEY;
exports.settings = development_1.envConfig;
