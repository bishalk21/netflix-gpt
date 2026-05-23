import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import { addTrailerVideo, type MovieVideo } from "@/reducer-actions/movieSlice";
import { TMDB_MOVIE_VIDEOS_BASE_URL } from "@/utils/constants";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export const useMovieVideos = (movieId: number) => {
  const dispatch = useAppDispatch();
  const fetchMovieVideos = async () => {
    try {
      const res = await fetch(
        `${TMDB_MOVIE_VIDEOS_BASE_URL}/${movieId}/videos`,
        TMDB_API_OPTIONS,
      );
      const data = await res.json();
      const filteredVideos = data.results.filter(
        (video: MovieVideo) =>
          video.type === "Trailer" && video.site === "YouTube",
      );
      const trailer = filteredVideos.length
        ? filteredVideos[0]
        : data.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
      throw error;
    }
  };
  useEffect(() => {
    fetchMovieVideos();
  }, []);
};
