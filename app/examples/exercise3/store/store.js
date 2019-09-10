import { createStore } from "redux";

const initialState = [
  {
    name: "John",
    surname: "Tsevdos",
    male: true,
    isOlympiakos: true,
  },
  {
    name: "Maria",
    surname: "PapaYolo",
    male: false,
  },
];

const rootReducer = (state) => state;

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
