import { mockMovies } from "@/utils/mockData";

const GPTMoviesSuggestions = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Recommended Movies</h2>

      <div
        className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-6
            "
      >
        {mockMovies.map((movie) => (
          <div
            key={movie.id}
            className="
                  group
                  relative
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:scale-105
                "
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="
                    rounded-xl
                    shadow-2xl
                    w-full
                  "
            />

            {/* HOVER OVERLAY */}
            <div
              className="
                    absolute
                    inset-0
                    bg-black/60
                    opacity-0
                    group-hover:opacity-100
                    transition
                    rounded-xl
                    flex
                    items-end
                    p-4
                  "
            >
              <div>
                <h3 className="font-bold text-lg">{movie.title}</h3>

                <button
                  className="
                        mt-2
                        bg-white
                        text-black
                        px-4
                        py-1
                        rounded
                        font-semibold
                        text-sm
                      "
                >
                  ▶ Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPTMoviesSuggestions;
