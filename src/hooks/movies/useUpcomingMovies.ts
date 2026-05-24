import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import { addUpcomingMovies } from "@/reducer-actions/movieSlice";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  const dispatch = useAppDispatch();
  const getUpcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        TMDB_API_OPTIONS,
      );
      const data = await res.json();
      dispatch(addUpcomingMovies(data.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      throw error;
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
