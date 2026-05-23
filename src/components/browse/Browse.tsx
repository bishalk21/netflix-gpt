import { useNowPlayingMovies } from "@/hooks/useNowPlayingMovies";
import MainLayout from "../MainLayout";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
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
  useNowPlayingMovies();

  return (
    <MainLayout>
      <div className="browse-page bg-black min-h-screen text-white">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </MainLayout>
  );
};

export default Browse;
