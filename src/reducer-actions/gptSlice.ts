import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "./movieSlice";

interface GPTState {
  isGptSearchViewOpen: boolean;
  // GPTSearchResults: any[];
  movieNames?: string[];
  movieDetails?: Movie[];
}

const initialState: GPTState = {
  isGptSearchViewOpen: false,
  // GPTSearchResults: [],
  movieNames: [],
  movieDetails: [],
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.isGptSearchViewOpen = !state.isGptSearchViewOpen;
    },
    addGPTSearchResults: (state, action) => {
      // state.GPTSearchResults = action.payload;
      const { movieNames, movieDetails } = action.payload;
      state.movieNames = movieNames;
      state.movieDetails = movieDetails;
    },
  },
});

export const { toggleGptSearchView, addGPTSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
