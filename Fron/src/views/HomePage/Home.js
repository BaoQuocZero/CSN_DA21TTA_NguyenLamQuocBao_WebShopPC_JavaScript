import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux'

import Color from "../HOC/Color";

import Nav from "../Nav/Nav";
import Slider from "../Slider/Slider";
import ListSanPham from "../SanPham/ListSanPham";

class Home extends React.Component {

    render() {
        return (
            <>
                <Nav />
                <Slider />
                <ListSanPham />

            </>
        )
    }
}

export default Color(Home);