import React, { Component } from "react";
import { withRouter } from "react-router";

import logo from '../../assets/images/imageAmongus.png'

import Color from "../HOC/Color";

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    //HOC: higher order component
    render() {
        return (
            <>
                <div>Hello home</div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);