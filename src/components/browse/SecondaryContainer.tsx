import { useAppSelector } from "@/utils/hooks";

const SecondaryContainer = () => {
  const movies = useAppSelector((state) => state.movies.nowPlaying); // Access the nowPlaying movies from the Redux store using the useAppSelector hook
  return (
    <>
      {" "}
      <div className="secondary-container relative z-20 -mt-40 px-8">
        <h2 className="text-2xl font-bold mb-4">Now Playing</h2>

        <div className="flex overflow-x-scroll gap-4 scrollbar-hide pb-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[220px] hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
