import {join} from 'path';

import {config} from 'dotenv';

export const mode = process.env.NODE_ENV ?? 'production';
export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
export const isProd = mode === 'production';
export const isDev = !isProd;
export const rootDir = join(__dirname, '../../');
export const webpackDir = join(__dirname, '../');
export const defaultPort = 8080;
let envFile = join(__dirname, `../../.env${isProd ? '.production' : ''}`);
const env = config({path: envFile}).parsed;
export const environment = env;
