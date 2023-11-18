import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bug' }
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })

        toast.success("Wow so easy!")
    }

    render() {
        let { listTodo } = this.state;
        return (
            <>
                <div className="list-todo-cantainer">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="list-todo-content" key={item.id}>
                                    <div className="todo-child">
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ListTodo;