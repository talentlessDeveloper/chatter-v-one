import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";

export default combineReducers({
  auth: authSlice,
});
