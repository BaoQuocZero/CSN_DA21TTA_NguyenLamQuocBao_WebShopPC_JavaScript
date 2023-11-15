import React from "react";

class AddComponents extends React.Component {
    state = {
        titleJob: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Click me')
        console.log(">>>Check State input: ", this.state)
    }

    render() {
        return (
            <>
                <div>Hello Add Components</div>
                <form action="/action_page.php" >
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input
                        type="text"
                        value={this.state.titleJob}
                        onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form >
            </>
        )
    }
}
export default AddComponents;