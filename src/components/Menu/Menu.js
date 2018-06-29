import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { map } from "lodash";

const menus = [
    {
        label: 'Home',
        to: '/',
        exact: true
    },
    {
        label: 'Product',
        to: '/product/list',
        exact: false
    }
];

const CustomLink = ({ label, to, activeWhenOnlyExact }) => (
    <Route
        path={to}
        exact={activeWhenOnlyExact}
        children={
            ({ match }) => {
                return (
                    <li className={match ? 'active' : ''}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }
        }
    />
)

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Demo Call API</a>
                <ul className="nav navbar-nav">
                    {this.createCustomMenu(menus)}
                </ul>
            </div>
        )
    }

    createCustomMenu = menus => {
        let rs = null;
        if (menus.length) {
            rs = map(menus, (menu, index) => {
                return (
                    <CustomLink key={index} label={menu.label} to={menu.to} activeWhenOnlyExact={menu.exact} />
                )
            })
        };
        return rs;
    }
}

export default Menu;