/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '@src': join(rootDir, '/src'),
    '@Assets': join(rootDir, '/src/Assets'),
    '@Layouts': join(rootDir, '/src/Layouts'),
    '@Services': join(rootDir, '/src/Services'),
    '@Stores': join(rootDir, '/src/Stores'),
    '@Pages': join(rootDir, '/src/Pages'),
    '@Components': join(rootDir, '/src/Components'),
    '@Utils': join(rootDir, '/src/Utils'),
    '@Routes': join(rootDir, '/src/Routes'),
};
