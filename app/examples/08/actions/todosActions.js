import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from "../constants/todosTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodosError = () => ({
  type: FETCH_TODOS_ERROR,
});
