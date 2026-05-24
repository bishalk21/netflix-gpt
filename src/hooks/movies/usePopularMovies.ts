import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import { addPopularMovies } from "@/reducer-actions/movieSlice";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useAppDispatch();
  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        TMDB_API_OPTIONS,
      );
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
