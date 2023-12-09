import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

import './Nav2.scss'

class Nav2 extends Component {
    handleViewHomePage = () => {
        // Điều hướng về trang "/"
        this.props.history.push("/");
    };

    handleViewDesktop = () => {
        this.props.history.push("/Desktop");
    };

    handleViewApple = () => {
        this.props.history.push("/Apple");
    };

    handleViewASUS = () => {
        this.props.history.push("/ASUS");
    };

    handleViewAll = () => {
        this.props.history.push("/All");
    };

    render() {
        return (
            <div className='navbar_Nav2' id='navbar'>
                <div className='nav_Nav2'>
                    <div className='isOpen_Nav2'>
                        <a className='image-navbar_Nav2' onClick={this.handleViewHomePage}>
                            ShopPC
                        </a>
                        <div className="ml-auto_Nav2" >
                            <a onClick={this.handleViewDesktop} className='nav-item_Nav2 nav-item1_Nav2'>Desktop</a>
                            <a onClick={this.handleViewApple} className='nav-item_Nav2 nav-item2_Nav2'>Apple</a>
                            <a onClick={this.handleViewASUS} className='nav-item_Nav2'>ASUS</a>
                            <a onClick={this.handleViewAll} className='nav-item_Nav2 nav-item4_Nav2'>Tất Cả</a>
                        </div>
                        <div className='cart-div_Nav2'>
                            <a href="/cart">
                                <FontAwesomeIcon icon={faCartShopping} className='font-awe_Nav2' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Sử dụng withRouter để có thể sử dụng history trong class component
export default withRouter(Nav2);
