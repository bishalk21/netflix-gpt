import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import { addTopRatedMovies } from "@/reducer-actions/movieSlice";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useAppDispatch();
  const getTopRatedMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        TMDB_API_OPTIONS,
      );
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      throw error;
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
