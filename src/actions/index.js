import * as ActionType from "./../constants/ActionType";
import callAPI from "../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";

const actFetchProductsAsyn = () => {
    return {
        type: ActionType.FETCH_PRODUCTS_ASYN
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

// const actGetProductRequest = id => {
//     return dispatch => {
//         callAPI('GET', `${Endpoints.PRODUCTS}/${id}`, null)
//             .then(res => {
//                 dispatch(actSetEditingProductToStore(res.data))
//             }).catch(err => console.log(err))
//     }
// }

// const actSetEditingProductToStore = product => {
//     return {
//         type: ActionType.SET_EDITING_PRODUCT,
//         product
//     }
// }

const actSetEditingProductAsyn = id => {
    return {
        type: ActionType.SET_EDITING_PRODUCT_ASYN,
        id
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

const actSaveCurrentAddingProduct = product => {
    return {
        type: ActionType.SAVE_CURRENT_ADDING_PRODUCT,
        product
    }
}

const actClearEditingProduct = () => {
    return {
        type: ActionType.CLEAR_EDITING_PRODUCT
    }
}

const actClearAddingProduct = () => {
    return {
        type: ActionType.CLEAR_ADDING_PRODUCT
    }
}

export {
    actDeleteProductRequest,
    actAddProductRequest, actUpdateProductRequest,
    actSaveCurrentAddingProduct, actClearEditingProduct, actClearAddingProduct,
    actSetEditingProductAsyn, actFetchProductsAsyn
};