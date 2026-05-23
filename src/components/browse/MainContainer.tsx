import { useAppSelector } from "@/utils/hooks";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  // Access the nowPlaying movies from the Redux store using the useAppSelector hook
  const movies = useAppSelector((state) => state.movies?.nowPlaying);
  // Early return if movies is undefined or empty to prevent errors when accessing movies[0]
  if (!movies || movies.length === 0) return null;
  const mainMovie = movies[0];
  const { id, title, overview } = mainMovie;
  return (
    <>
      <div className="main-container relative h-screen">
        <VideoContainer movieId={id} />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute top-1/3 left-16 max-w-xl z-10">
          <h1 className="text-6xl font-bold mb-4">{title}</h1>

          <p className="text-lg text-gray-200 mb-6 line-clamp-3">{overview}</p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-300 transition">
              ▶ Play
            </button>

            <button className="bg-gray-500/70 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500 transition">
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
