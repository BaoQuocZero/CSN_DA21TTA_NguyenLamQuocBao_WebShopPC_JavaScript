import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom'; // Import withRouter hoc

import './Nav2.scss'

class Nav2 extends Component {
    handleViewHomePage = () => {
        // Điều hướng về trang "/"
        this.props.history.push("/");
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
                            <a href="/" className='nav-item_Nav2 nav-item1_Nav2'>Desktop</a>
                            <a href="/about" className='nav-item_Nav2 nav-item2_Nav2'>Apple</a>
                            <a href="/contact" className='nav-item_Nav2'>ASUS</a>
                            <a href="/contact" className='nav-item_Nav2 nav-item4_Nav2'>Tất Cả</a>
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
