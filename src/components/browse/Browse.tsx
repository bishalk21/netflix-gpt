import { useNowPlayingMovies } from "@/hooks/movies/useNowPlayingMovies";
import MainLayout from "../MainLayout";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "@/hooks/movies/usePopularMovies";
import { useUpcomingMovies } from "@/hooks/movies/useUpcomingMovies";
import { useTopRatedMovies } from "@/hooks/movies/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useAppSelector } from "@/utils/hooks";
/**
 * Main Container
 *   - Video Background (Hero Section)
 *   - Video Title, Description, and Action Buttons (Play, More Info)
 * Secondary Container
 *   - Movie List * n (Now Playing Movies)
 *   - carousel/scrollable row for movies
 *   - Each movie item will have a poster image and title
 *   - On hover, show additional info like rating and release date
 */

const Browse = () => {
  const showGPTSearch = useAppSelector(
    (state) => state.gpt.isGptSearchViewOpen,
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <MainLayout>
      <div className="browse-page bg-black min-h-screen text-white">
        {showGPTSearch ? (
          <>
            <GPTSearch />
          </>
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Browse;
