import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import appReducer from "./../reducers/index";

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
    applyMiddleware(thunk)
);

const persistedStore = persistStore(store);

export { store, persistedStore };