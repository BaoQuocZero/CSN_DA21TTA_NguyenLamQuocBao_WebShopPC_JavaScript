import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux'

import logo from '../../assets/images/imageAmongus.png'

import Color from "../HOC/Color";

class Home extends React.Component {
    render() {
        console.log(">>>Check: ", this.props)
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
const mapStateToProp = (state) => {
    return {
        dataRedux: state.user
    }
}

export default connect(mapStateToProp)(Color(Home));