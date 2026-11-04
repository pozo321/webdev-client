import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (state) => {
      state.count += 1;
    },
    down: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 7;
    },
    resetToSeven: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, reset, resetToSeven } = counterSlice.actions;
export default counterSlice.reducer;
