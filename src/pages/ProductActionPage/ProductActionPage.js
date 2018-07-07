import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Action from "./../../actions/index";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            console.log('load editing');
            let { id } = match.params;
            //get product info when edit product
            this.props.onGetProduct(id);
        } else {
            console.log('load adding');
            let { addingItem } = this.props;
            this.setState({
                id: addingItem.id,
                name: addingItem.name,
                price: addingItem.price,
                status: addingItem.status
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        console.log('receive prop');
        if (nextProps && nextProps.editingItem.id) {
            console.log('jump to edit');
            let { editingItem } = nextProps;
            this.setState({
                id: editingItem.id,
                name: editingItem.name,
                price: editingItem.price,
                status: editingItem.status
            })
        } else if (nextProps && nextProps.addingItem) {
            console.log('jump to add');
            let { addingItem } = nextProps;
            this.setState({
                id: addingItem.id,
                name: addingItem.name,
                price: addingItem.price,
                status: addingItem.status
            })
        }
    }

    handleChange = event => {
        let { onSaveCurrentAddingProduct } = this.props;
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (!this.state.id) {
                console.log('saving addding');
                onSaveCurrentAddingProduct(this.state)
                //console.log(this.state);
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let { history } = this.props;
        let { id, name, price, status } = this.state;
        if (name && price && (status || status === false)) {
            //check if existsed id, then edit product
            if (id) {
                this.props.onUpdateProduct(this.state)
                history.goBack();
            } else {//otherwise add product to backend
                this.props.onAddProduct(this.state);
                this.props.onClearAddingProduct();
                history.goBack();
            }
        }
    }

    render() {
        let { name, price, status } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.handleSubmit}>
                    <legend>{this.state.id ? 'Editing Product' : 'Add Product'}</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Name"
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Price"
                            name='price'
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="status"
                                    checked={status}
                                    onChange={this.handleChange}
                                />
                                in stock
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/product/list' className="btn btn-primary ml-4">Back</Link>
                </form>
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        editingItem: state.editingItem,
        addingItem: state.productForm
    }
}

const mapDispatchToProp = (dispatch, prop) => {
    return {
        onAddProduct: product => {
            dispatch(Action.actAddProductRequest(product))
        },
        onGetProduct: id => {
            dispatch(Action.actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(Action.actUpdateProductRequest(product))
        },
        onSaveCurrentAddingProduct: product => {
            dispatch(Action.actSaveCurrentAddingProduct(product))
        },
        onClearAddingProduct: () => {
            dispatch(Action.actClearAddingProduct())
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductActionPage);