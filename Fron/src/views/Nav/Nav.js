import React from "react";

import logo from '../../assets/images/logo.gif'

import './Nav.scss'

import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <div className="top-nav">
                        <ul>
                            <li>
                                <div className="logo"><img src={logo} alt="" /></div>
                            </li>
                            <li><a href="">Trà Vinh </a><i className="fas fa-map-marker-alt"></i></li>
                            <li><button className="top-nav-btn"> Giỏ hàng</button></li>
                            <li><a href="">Tin tức</a></li>
                            <li><a href="">Hỏi đáp</a></li>
                            <li><a href="index-dev.html">Về chúng tôi</a></li>
                            <li>
                                <div className="search-box">
                                    <input className="search-box-input" type="text" placeholder="Bạn tìm gì..." />
                                    <button className="search-box-btn"><i className="fas fa-search"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
export default Nav;