import * as ActionType from "./../constants/ActionType";
let initialState = {};
const editingItem = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_EDITING_PRODUCT:
            return { ...action.product };
        default:
            return state;
    }
}

export default editingItem;