import { combineReducers } from "redux";
import { createSelector } from "reselect";
import TodosReducer from "./TodosReducer";
import InputReducer from "./InputReducer";
import FilterReducer from "./FilterReducer";
import { PENDING, DONE } from "../constants/filterTypes";
import { getFilter } from "./FilterReducer";
import { getTodos } from "./TodosReducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  input: InputReducer,
  filter: FilterReducer,
});

export default rootReducer;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    if (filter === PENDING) {
      return todos.filter((todo) => !todo.done);
    } else if (filter === DONE) {
      return todos.filter((todo) => todo.done);
    }

    return todos;
  }
);
