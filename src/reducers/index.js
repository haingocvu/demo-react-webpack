import { combineReducers } from "redux";
import products from "./../reducers/products";
import editingItem from "./editingItem";
import productForm from "./productForm";

const appReducer = combineReducers({
    products,
    editingItem,
    productForm
})

export default appReducer;