import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import React from 'react';
import AppLayout from './components/AppLayout';
setConfig({
    reloadHooks: true,
});

const App = () => {
    return <AppLayout />;
};
export default process.env.NODE_ENV === 'development' ? hot(App) : App;
