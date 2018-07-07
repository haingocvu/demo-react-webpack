import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import appReducer from "./../reducers/index";

const sagaMiddleWare = createSagaMiddleware();

const persisConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ['productForm']
}

const persistedReducer = persistReducer(persisConfig, appReducer);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

const persistedStore = persistStore(store);

export { store, persistedStore };