import React, { Component } from 'react';
import ProductsList from "./../../components/ProductsList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { map } from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Action from "./../../actions/index";

class ProductListPage extends Component {

    componentDidMount() {
        this.props.onFetchProductsToReduxState();
    }

    render() {
        //let { products } = this.props;
        let { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-success mb-4">Add Product</Link>
                <ProductsList>
                    {this.showProductItem(products)}
                </ProductsList>
            </div>
        )
    }

    onDeleteItem = id => {
        this.props.ondeleteProduct(id);
    }

    showProductItem = products => {
        let rs = null;
        if (products.length) {
            rs = map(products, (product, index) => {
                return (
                    <ProductItem key={index} index={index} product={product} onDeleteItem={this.onDeleteItem} />
                )
            })
        }
        return rs;
    }
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onFetchProductsToReduxState: () => {
            dispatch(Action.actFetchProductRequest())
        },
        ondeleteProduct: id => {
            dispatch(Action.actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductListPage);