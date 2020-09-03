import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {configureStore} from "./store/redux/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={configureStore()}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('reactRoot')
);
