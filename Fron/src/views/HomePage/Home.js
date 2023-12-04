import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux'

import Color from "../HOC/Color";

import Nav from "../Nav/Nav";
import Sliders from "../Slider/Sliders";
import ListSanPham from "../SanPham/ListSanPham";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <>
                <Nav />
                <Sliders />
                <ListSanPham />

            </>
        )
    }
}

export default Home;