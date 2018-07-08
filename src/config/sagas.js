import { put, takeEvery, call, all } from "redux-saga/effects";
import callAPI from "./../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";
import * as ActionType from "./../constants/ActionType";

function* getProductAsyn(action) {
    try {
        let rs = yield call(callAPI, 'GET', `${Endpoints.PRODUCTS}/${action.id}`, null);
        yield put({
            type: ActionType.SET_EDITING_PRODUCT,
            product: rs.data
        })
    } catch (error) {
        console.log(error)
    }
}

function* fetchProductsAsyn() {
    try {
        let rs = yield call(callAPI, 'GET', `${Endpoints.PRODUCTS}`, null);
        yield put({
            type: ActionType.SET_LIST_PRODUCTS,
            products: rs.data
        });
    } catch (error) {
        console.log(error)
    }
}

function* updateProductAsyn(action) {
    try {
        let rs = yield call(callAPI, 'PUT', `${Endpoints.PRODUCTS}/${action.product.id}`, action.product);
        yield put({
            type: ActionType.UPDATE_PRODUCT,
            product: rs.data
        })
    } catch (error) {
        console.log(error)
    }
}

function* addProductAsyn(action) {
    try {
        let rs = yield call(callAPI, 'POST', `${Endpoints.PRODUCTS}`, action.product);
        yield put({
            type: ActionType.ADD_PRODUCT,
            product: rs.data
        })
    } catch (error) {
        console.log(error)
    }
}

function* deleteProductAsyn(action) {
    try {
        let rs = yield call(callAPI, 'DELETE', `${Endpoints.PRODUCTS}/${action.id}`, null);
        console.log(rs);
        yield put({
            type: ActionType.DELETE_PRODUCT,
            id: rs.data.id
        })
    } catch (error) {
        console.log(error)
    }
}

function* watchDeleteProductAsyn() {
    yield takeEvery('DELETE_PRODUCT_ASYN', deleteProductAsyn)
}

function* watchAddProductAsyn() {
    yield takeEvery('ADD_PRODUCT_ASYN', addProductAsyn)
}

function* watchUpdateProductAsyn() {
    yield takeEvery('UPDATE_PRODUCT_ASYN', updateProductAsyn)
}

function* watchFetchProductsAsyn() {
    yield takeEvery('FETCH_PRODUCTS_ASYN', fetchProductsAsyn)
}

function* watchGetProductAsyn() {
    yield takeEvery('SET_EDITING_PRODUCT_ASYN', getProductAsyn)
}

export default function* rootSaga() {
    yield all([
        watchGetProductAsyn(),
        watchFetchProductsAsyn(),
        watchUpdateProductAsyn(),
        watchAddProductAsyn(),
        watchDeleteProductAsyn()
    ])
}