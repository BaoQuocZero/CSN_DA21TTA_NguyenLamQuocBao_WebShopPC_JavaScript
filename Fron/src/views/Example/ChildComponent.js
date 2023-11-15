import React from "react";

class ChildComponent extends React.Component {
    /*
    JFX => return 1 block hay 1 div
    Nếu muốn nhiều hơn 1 div ta dùng <> div1 div2 </>
    */
    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Click me')
        console.log(">>>Check State input: ", this.state)
    }

    render() {
        console.log(">>>Check State: ", this.state)
        return (
            <>
                <div>Child Component : {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;