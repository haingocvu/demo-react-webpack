import * as ActionType from "./../constants/ActionType";

const initialState = {
    id: '',
    name: '',
    price: '',
    status: false
}
const productForm = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SAVE_CURRENT_ADDING_PRODUCT:
            let { product } = action;
            return action.product;
        case ActionType.CLEAR_ADDING_PRODUCT:
            return {
                id: '',
                name: '',
                price: '',
                status: false
            }
        default:
            return state;
    }
}

export default productForm;