import { createSlice } from "@reduxjs/toolkit";
import { resetReactReduxApp } from "../action/action";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hone Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Mumbai",
        days: 3,
        fact: "The City that never sleeps",
      },
      {
        name: "Toronto",
        days: 2,
        fact: "Biggest waterfall of North America",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
    // resetDestination: (state, action) => {
    //     state.destinationSelected = null
    //     console.log(action)
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(resetReactReduxApp, (state) => {
      state.destinationSelected = null;
    });
  },
});

export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
