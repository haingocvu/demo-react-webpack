import { put, takeEvery, call, all } from "redux-saga/effects";
import callAPI from "./../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";
import * as ActionType from "./../constants/ActionType";

function* getProductAsyn(id) {
    let product = yield call(callAPI, 'GET', `${Endpoints.PRODUCTS}/${id}`, null);
    yield put({
        type: ActionType.SET_EDITING_PRODUCT,
        product
    })
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

function* watchFetchProductsAsyn() {
    yield takeEvery('FETCH_PRODUCTS_ASYN', fetchProductsAsyn)
}

function* watchGetProductAsyn() {
    yield takeEvery('SET_EDITING_PRODUCT_ASYN', getProductAsyn)
}

export default function* rootSaga() {
    yield all([
        watchGetProductAsyn(),
        watchFetchProductsAsyn()
    ])
}