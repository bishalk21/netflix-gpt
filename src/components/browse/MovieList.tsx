import { useRef } from "react";
import type { Movie } from "@/reducer-actions/movieSlice";

interface MovieListProps {
  movies: Movie[];
  title: string;
}

const MovieList = ({ movies, title }: MovieListProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -1200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 1200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group mb-12">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-white mb-5 px-4 md:px-12">
        {title}
      </h2>

      {/* LEFT GRADIENT */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      {/* RIGHT GRADIENT */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* LEFT BUTTON */}
      <button
        onClick={scrollLeft}
        className="
          absolute
          left-2
          top-1/2
          -translate-y-1/2
          z-20
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          bg-black/60
          hover:bg-black/90
          text-white
          p-4
          rounded-full
          backdrop-blur-sm
        "
      >
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={scrollRight}
        className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          z-20
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          bg-black/60
          hover:bg-black/90
          text-white
          p-4
          rounded-full
          backdrop-blur-sm
        "
      >
        ❯
      </button>

      {/* MOVIE ROW */}
      <div
        ref={sliderRef}
        className="
          flex
          overflow-x-scroll
          scroll-smooth
          scrollbar-hide
          scrollbar-none
          gap-3
          px-4
          md:px-12
          pb-4
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="
              min-w-[180px]
              md:min-w-[240px]
              relative
              transition-all
              duration-300
              hover:scale-110
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
                absolute
                inset-0
                bg-black/20
                opacity-0
                hover:opacity-100
                transition
                duration-300
                rounded-lg
                flex
                items-end
                p-3
              "
            >
              <p className="text-sm font-semibold text-white">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
