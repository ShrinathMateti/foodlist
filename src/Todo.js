import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
    };
  }

  readTodo = (e) => {
    this.setState({ todo: e.target.value });
  };

  addTodo = () => {
    if (this.state.todo.trim()) { // Prevent adding empty todos
      this.setState((prevState) => ({
        todos: [...prevState.todos, prevState.todo],
        todo: "",
      }));
    }
  };

  // deleteTodo = ()=>{
  //   const newTodos = this.state.todos.filter((todo,indx)=>index!==indx)
  //   this.setState(
  //     {todos:newTodos}
  //   )
  // }

  render() {
    const color = {
      color: "white",
      backgroundColor: "gray",
    };
    return (
      <div className="mt-5">
        <input
          type="text"
          value={this.state.todo}
          onChange={this.readTodo}
          placeholder="Enter a todo"
        />
        <button onClick={this.addTodo} style={color}>
          Add Todo
        </button>
        <ul className="list-group mt-3">
          {this.state.todos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              {todo}

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
