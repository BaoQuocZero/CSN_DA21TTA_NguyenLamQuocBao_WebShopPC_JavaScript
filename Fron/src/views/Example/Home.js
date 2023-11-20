import React, { Component } from "react";
import { withRouter } from "react-router";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }

    //HOC: higher order component
    render() {
        return (
            <>
                <div>Hello home</div>
            </>
        )
    }
}
export default withRouter(Home);