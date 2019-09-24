import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import FilterReducer from "./FilterReducer";
import { ALL, IT, MARKETING, HR, FINANCE } from "../constants/filterTypes";

const rootReducer = combineReducers({
  users: UsersReducer,
  filter: FilterReducer,
});

export default rootReducer;

export function getFilteredUsers(users, filter) {
  console.log(users, filter);
  // Implement selector

  return users;
}
