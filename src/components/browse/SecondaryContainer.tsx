import { useAppSelector } from "@/utils/hooks";
import MovieList from "./MovieList";
/**
 * Secondary Container
 * - Movie List * n (Now Playing Movies)
 * - Movie List * n (Popular Movies)
 * - Movie List * n (Top Rated Movies)
 * - Movie List * n (Upcoming Movies)
 * - carousel/scrollable row for movies
 * - Each movie item will have a poster image and title
 * - On hover, show additional info like rating and release date
 *
 */

const SecondaryContainer = () => {
  const nowPlayingMovies = useAppSelector((state) => state.movies.nowPlaying);
  const popularMovies = useAppSelector((state) => state.movies.popular);
  const topRatedMovies = useAppSelector((state) => state.movies.topRated);
  const upcomingMovies = useAppSelector((state) => state.movies.upcoming);

  return (
    <>
      <div className="secondary-container relative z-20 -mt-40 px-8 space-y-12">
        <MovieList movies={nowPlayingMovies} title="Now Playing" />
        <MovieList movies={popularMovies} title="Popular Movies" />
        <MovieList movies={topRatedMovies} title="Top Rated Movies" />
        <MovieList movies={upcomingMovies} title="Upcoming Movies" />
      </div>
    </>
  );
};

export default SecondaryContainer;
