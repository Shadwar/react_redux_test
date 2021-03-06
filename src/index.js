import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import combinedReducers from './reducers';
import App from './components/App';

const store = createStore(combinedReducers, devToolsEnhancer());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
