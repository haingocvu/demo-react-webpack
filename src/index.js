import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from "react-redux";
import {store, persistedStore} from "./config/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistedStore}>
                            <App />
                        </PersistGate>
                    </Provider>, 
                    document.getElementById('root')
                );