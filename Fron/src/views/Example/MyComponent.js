import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
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
                <form action="/action_page.php" >
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form >
                <ChildComponent name={"Eric"} age={'25'} />
            </>
        )
    }
}

export default MyComponent;