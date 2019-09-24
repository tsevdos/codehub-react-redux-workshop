import { CHANGE_FILTER } from "../constants/filterTypes";

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});
