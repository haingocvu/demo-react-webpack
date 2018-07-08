import * as ActionType from "./../constants/ActionType";
import callAPI from "../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";

const actFetchProductsAsyn = () => {
    return {
        type: ActionType.FETCH_PRODUCTS_ASYN
    }
}

const actAddProductAsyn = (product) => {
    return {
        type: ActionType.ADD_PRODUCT_ASYN,
        product
    }
}

const actSetEditingProductAsyn = id => {
    return {
        type: ActionType.SET_EDITING_PRODUCT_ASYN,
        id
    }
}

const actUpdateProductAsyn = product => {
    return {
        type: ActionType.UPDATE_PRODUCT_ASYN,
        product
    }
}

const actDeleteProductAsyn = id => {
    return {
        type: ActionType.DELETE_PRODUCT_ASYN,
        id
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
    actAddProductAsyn, actDeleteProductAsyn,
    actSaveCurrentAddingProduct, actClearEditingProduct, actClearAddingProduct,
    actSetEditingProductAsyn, actFetchProductsAsyn, actUpdateProductAsyn
};