import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Users from "./containers/Users";

export default function Exercise3() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
