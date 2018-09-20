import { combineReducers } from "redux";
import TodoReducer from "./reducer_todo";

const rootReducer = combineReducers({
  todoList: TodoReducer
});

export default rootReducer;
