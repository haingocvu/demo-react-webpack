import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductItem extends Component {

    onDeleteItem = id => {
        if (window.confirm('are you sure?')) {
            this.props.onDeleteItem(id)
        }
    }

    render() {
        let { index, product } = this.props;
        let productStatus = product.status ? 'in stock' : 'out of stock';
        let productClass = product.status ? 'label-success' : 'label-warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label ${productClass}`}>{productStatus}</span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-warning"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-4"
                        onClick={() => {
                            this.onDeleteItem(product.id)
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;