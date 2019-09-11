import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_TODOS } from "../constants/todosTypes";
import { fetchTodosSuccess, fetchTodosError } from "../actions/todosActions";
import { getTodos } from "../api/todos";

// Workers
export function* doFetchQuestions() {
  try {
    const todos = yield call(getTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (err) {
    yield put(fetchTodosError(err));
  }
}

// Watcher
export default function* watchTodos() {
  yield takeEvery(FETCH_TODOS, doFetchQuestions);
}
