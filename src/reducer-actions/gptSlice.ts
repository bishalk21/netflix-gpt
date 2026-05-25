import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchViewOpen: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGptSearchViewOpen = !state.isGptSearchViewOpen;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
