import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoApp from "./containers/TodoApp";

export default function Exercise2() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
