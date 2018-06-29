import { combineReducers } from "redux";
import products from "./../reducers/products";
import editingItem from "./editingItem";

const appReducer = combineReducers({
    products,
    editingItem
})

export default appReducer;