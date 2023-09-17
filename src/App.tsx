import './App.css';

import {BrowserRouters} from '@Routes/index';
import React from 'react';
import {RouterProvider} from 'react-router-dom';

const App = () => {
    return <RouterProvider router={BrowserRouters} />;
};

export default App;
