import { combineReducers } from "redux";

import login from "./reducers/login";
import register from "./reducers/register";

export default combineReducers({
  login,
  register
});
