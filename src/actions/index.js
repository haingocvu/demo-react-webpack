import * as ActionType from "./../constants/ActionType";
import callAPI from "../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";

const actFetchProduct = products => {
    return {
        type: ActionType.FETCH_PRODUCTS,
        products
    }
}

const actFetchProductRequest = () => {
    return dispatch => {
        return callAPI('GET', `${Endpoints.PRODUCTS}`, null)
            .then(res => {
                dispatch(actFetchProduct(res.data))
            })
            .catch(err => console.log(err))
    }
}

const actDeleteProduct = id => {
    return {
        type: ActionType.DELETE_PRODUCT,
        id
    }
}

const actDeleteProductRequest = id => {
    return dispatch => {
        return callAPI('DELETE', `${Endpoints.PRODUCTS}/${id}`, null)
            .then(res => {
                //call dispatch
                dispatch(actDeleteProduct(id))
            }).catch(err => console.log(err))
    }
}

const actAddProduct = product => {
    return {
        type: ActionType.ADD_PRODUCT,
        product
    }
}

const actAddProductRequest = product => {
    return dispatch => {
        return callAPI('POST', `${Endpoints.PRODUCTS}`, product)
            .then(res => {
                //call dispatch redux reducer
                dispatch(actAddProduct(res.data))
            }).catch(err => console.log(err))
    }
}

const actGetProductRequest = id => {
    return dispatch => {
        callAPI('GET', `${Endpoints.PRODUCTS}/${id}`, null)
            .then(res => {
                dispatch(actSetEditingProductToStore(res.data))
            }).catch(err => console.log(err))
    }
}

const actSetEditingProductToStore = product => {
    return {
        type: ActionType.SET_EDITING_PRODUCT,
        product
    }
}

const actUpdateProduct = product => {
    return {
        type: ActionType.EDIT_PRODUCT,
        product
    }
}

const actUpdateProductRequest = product => {
    return dispatch => {
        return callAPI('PUT', `${Endpoints.PRODUCTS}/${product.id}`, product)
            .then(res => {
                //call update product redux store
                dispatch(actUpdateProduct(res.data))
            }).catch(err => console.log(err))
    }
}

export {
    actFetchProductRequest, actDeleteProductRequest,
    actAddProductRequest, actGetProductRequest, actUpdateProductRequest
};