import { createStore, applyMiddleware, compose } from "redux";
import api from "./middleware/api";
import rootReducer from "../reducers/index";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(api)));

export default store;
