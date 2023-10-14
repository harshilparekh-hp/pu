import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { resetReactReduxApp } from "../action/action";

const initialCounterState = { counter: 10 };

export const counterSlice = createSlice({
  name: "cntr",
  initialState: initialCounterState,
  reducers: {
    // here we will define all actions
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    decMultiplier: (state, actions) => {
      state.counter -= actions.payload;
    },
    incMultiplier: (state, actions) => {
      state.counter += actions.payload;
    },
  },

  // Below is to create customized action routes which are available in different slice.
  // extraReducers: (builder) => {
  //   builder.addCase(resetDestination.toString(), (state,action) => {
  //     state.counter = 0
  //   })
  // }

  //Below is also a way to listen to custom action defined in actions.js
  extraReducers: (builder) => {
    builder.addCase(resetReactReduxApp, (state) => {
      state.counter = 0;
    });
  },
});

// export using Pre defined values like actions and reducer
export const {
  incrementCounter,
  decrementCounter,
  decMultiplier,
  incMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
