import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}
export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

const initialState = {
  nowPlaying: [] as Movie[], // Initial state for now playing movies, typed as an array of Movie objects
  trailerVideo: null as MovieVideo | null, // Initial state for the currently selected trailer video, typed as either a MovieVideo object or null
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload; // Update the nowPlaying state with the new movies data from the action payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // Update the trailerVideo state with the new trailer video data from the action payload
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions; // Export the generated action creators for adding now playing movies and trailer videos to the state
export default moviesSlice.reducer;
