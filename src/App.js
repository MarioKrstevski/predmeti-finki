import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './stores/subjects';
// import store from './stores/lib/redux';
import React from 'react';
import AppLayout from './components/AppLayout';
import InboxScreen from './storybook-examples/InboxScreen';
setConfig({
    reloadHooks: true,
});

const App = () => {
    return (
        <Provider store={store}>
            {/* <InboxScreen /> */}
            <AppLayout />
        </Provider>
    );
};
export default process.env.NODE_ENV === 'development' ? hot(App) : App;
