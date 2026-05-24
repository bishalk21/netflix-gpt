import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import { addNowPlayingMovies } from "@/reducer-actions/movieSlice";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useAppDispatch();
  const fetchNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMDB_API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results)); // Dispatch the action to update the nowPlaying movies in the Redux store
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
      throw error;
    }
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};
