import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers/index";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));