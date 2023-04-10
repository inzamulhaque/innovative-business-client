import counterSlice from "./reducer/counterSlicer";
import todoReducer from "./reducer/todoSlice";

const reducer = {
  counter: counterSlice,
  todos: todoReducer,
  //other reducers come here...
};

export default reducer;
