import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
    reducer:{
        counterStore: counterReducer,
        destinationStore: destinationReducer
    }
})

console.log(store.getState());

// ONE WAY TO CALL ACTION METHODS - REDUCER/ACTION

// store.dispatch({
//     type:"counter/incrementCounter",
// })
// console.log(store.getState());

