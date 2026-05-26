import type { Movie } from "@/reducer-actions/movieSlice";

const MovieCard = ({ movie }: { movie: Movie }) => {
  if (!movie.poster_path) {
    return null; // Skip rendering if there's no poster image
  }
  return (
    <div
      key={movie.id}
      className="
                w-40
             min-w-[180px]
              md:min-w-[240px]
              relative
              transition-all
              duration-300
              hover:scale-105
              hover:z-30
              cursor-pointer
            "
    >
      {/* IMAGE */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="
                rounded-lg
                object-cover
                shadow-lg
              "
      />

      {/* HOVER OVERLAY */}
      <div
        className="
              flex
              flex-col
              justify-end
              items-start
                absolute
                inset-0
                bg-black/20
                opacity-0
                hover:opacity-100
                transition
                duration-300
                rounded-lg
                p-3
                bg-gradient-to-t from-black/80 to-transparent
              "
      >
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
  );
};

export default MovieCard;
