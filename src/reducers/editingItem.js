import * as ActionType from "./../constants/ActionType";
let initialState = {};
const editingItem = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_EDITING_PRODUCT:
            return { ...action.product };
        case ActionType.CLEAR_EDITING_PRODUCT:
            return {}
        default:
            return state;
    }
}

export default editingItem;