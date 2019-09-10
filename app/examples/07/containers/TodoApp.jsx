import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import { changeInput } from "../actions/filterActions";
import TodoItem from "../components/TodoItem";
import { ALL, PENDING, DONE } from "../constants/filterTypes";
import { getFilter } from "../reducers/FilterReducer";
import { getFilteredTodos } from "../reducers/index";

class TodoApp extends Component {
  addToDo = (e) => {
    e.preventDefault();
    const { input, addTodo } = this.props;
    const todo = {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      title: input,
      done: false,
    };

    addTodo(todo);
  };

  render() {
    const { filteredTodos, input, filter, toggleTodo, updateInput, changeInput } = this.props;

    return (
      <div className="container">
        <h2>My ToDos</h2>
        <hr />
        <div className="btn-group btn-group-sm">
          <button
            onClick={() => changeInput(ALL)}
            className={`btn ${filter === ALL ? "btn-primary" : "btn-light"}`}
          >
            ALL
          </button>
          <button
            onClick={() => changeInput(PENDING)}
            className={`btn ${filter === PENDING ? "btn-primary" : "btn-light"}`}
          >
            Pending
          </button>
          <button
            onClick={() => changeInput(DONE)}
            className={`btn ${filter === DONE ? "btn-primary" : "btn-light"}`}
          >
            Done
          </button>
        </div>
        <br />
        <br />
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        <form onSubmit={this.addToDo}>
          Add ToDo:{" "}
          <input value={input} onChange={(e) => updateInput(e.target.value)} type="text" />
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredTodos: getFilteredTodos(state),
  input: state.input,
  filter: getFilter(state),
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  updateInput,
  changeInput,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
