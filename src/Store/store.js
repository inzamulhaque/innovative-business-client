import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Store/reducer/counterSlicer'
import reducer from "./AllReducer"
import todoReducer from "./reducer/todoSlice"


export const store = configureStore({
    reducer: {
        // reducer: reducer,
        todos: todoReducer,

    }

})