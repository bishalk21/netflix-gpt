import { useAppSelector } from "@/utils/hooks";
import MovieCard from "../MovieCard";

const GPTMoviesSuggestions = () => {
  const moviesSuggestions = useAppSelector((state) => state.gpt.movieDetails);

  return (
    <div className="mt-16 relative group">
      {!moviesSuggestions || moviesSuggestions.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-300">
            <i className="fas fa-film mr-2"></i> No movie suggestions available.
            Try asking GPT for some recommendations!
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recommended Movies
          </h2>
          <div
            className="flex flex-wrap justify-center 
          gap-4
          px-4
          md:px-12
          pb-4"
          >
            {moviesSuggestions?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GPTMoviesSuggestions;
