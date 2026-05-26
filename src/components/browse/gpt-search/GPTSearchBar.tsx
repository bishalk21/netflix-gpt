import { languageConfig } from "@/config/languageConfig";
import { TMDB_API_OPTIONS } from "@/config/tmdbConfig";
import type { LanguageCode } from "@/reducer-actions/appConfigSlice";
import { addGPTSearchResults } from "@/reducer-actions/gptSlice";
import { openai } from "@/services/openAIService";
import { TMDB_SEARCH_BASE_URL } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { useRef } from "react";

const GPTSearchBar = () => {
  const dispatch = useAppDispatch();
  const langKey: LanguageCode = useAppSelector((state) => state.appConfig.lang);
  const gptSearchRef = useRef<HTMLInputElement>(null);

  const searchMoviesTMDB = async (movieTitle: string) => {
    const res = await fetch(
      `${TMDB_SEARCH_BASE_URL}?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS,
    );
    const data = await res.json();
    return data.results;
  };

  const handleGPTSearch = async () => {
    try {
      const gptQuery = `Act as a movie recommendation engine. 
      Based on the following query, recommend 5 movies: 
      ${gptSearchRef.current?.value || ""}
      Only return the movie titles separated by commas like: Blade Runner, Inception, The Matrix, Interstellar, The Prestige.`;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
      });
      const recommendedMovieTitles =
        response.choices[0].message.content?.split(",");

      if (recommendedMovieTitles) {
        const searchPromises = recommendedMovieTitles.map((movie) =>
          searchMoviesTMDB(movie),
        );

        // [promise1, promise2, ...] => wait for all promises to resolve
        const searchResults = await Promise.all(searchPromises);
        // dispatch(addGPTSearchResults(searchResults.flat())); // Flatten the array of results and store in Redux
        dispatch(
          addGPTSearchResults({
            movieNames: recommendedMovieTitles,
            movieDetails: searchResults.flat(),
          }),
        );
      }
    } catch (error) {
      console.error("Error fetching GPT recommendations:", error);
      // Handle error (e.g., show a notification to the user)
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
      <form
        className="w-full max-w-lg bg-black/70 backdrop-blur-md p-3 rounded-xl border border-gray-700 shadow-2xl flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder={languageConfig[langKey].searchPlaceholder}
          className="flex-1 bg-transparent outline-none text-white px-4 py-4 text-md placeholder:text-gray-400"
          ref={gptSearchRef}
        />

        <button
          className="bg-red-600 hover:bg-red-700 transition px-8 rounded-lg font-bold text-white"
          onClick={handleGPTSearch}
        >
          {languageConfig[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
