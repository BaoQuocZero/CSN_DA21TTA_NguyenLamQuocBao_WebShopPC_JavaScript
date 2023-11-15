import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    /*
    JFX => return 1 block hay 1 div
    Nếu muốn nhiều hơn 1 div ta dùng <> div1 div2 </>
    */
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: "abcJob1", title: "Developer", salary: "500 $" },
            { id: "abcJob2", title: "Testers", salary: "400 $" },
            { id: "abcJob3", title: "Project managers", salary: "1000 $" }
        ]
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
                <ChildComponent
                    name={this.state.firstName}
                    address={"Ha Noi"}
                    age={'25'}
                    arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponent;