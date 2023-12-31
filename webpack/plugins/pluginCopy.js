/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {join} from 'path';

import CopyPlugin from 'copy-webpack-plugin';

import {rootDir} from '../utils/env';

const config = {
    patterns: [{from: join(rootDir, './src/Assets'), to: 'Assets'}],
};

export const copyPlugin = new CopyPlugin(config);
