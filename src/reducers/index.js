import { combineReducers } from "redux";
import counterReducer from "./counter";
import isloginReducer from "./isLogin";

const allReducers = combineReducers({
  counter: counterReducer,
  islogin: isloginReducer,
});

export default allReducers;
