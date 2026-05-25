import GPTMoviesSuggestions from "./gpt-search/GPTMoviesSuggestions";
import GPTSearchBar from "./gpt-search/GPTSearchBar";

const GPTSearch = () => {
  /**
   * TODO: Implement GPTSearch component
   * - GPT Search bar
   * - GPT Search results (movie recommendations based on user query)
   */
  return (
    <div className="relative pt-40 px-4 md:px-12">
      <GPTSearchBar />
      <GPTMoviesSuggestions />
    </div>
  );
};

export default GPTSearch;
