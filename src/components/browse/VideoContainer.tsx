import { useMovieVideos } from "@/hooks/useMovieVideos";
import { useAppSelector } from "@/utils/hooks";

const VideoContainer = ({ movieId }: { movieId: number }) => {
  const trailerVideo = useAppSelector((state) => state.movies.trailerVideo);
  useMovieVideos(movieId);
  return (
    <>
      <div className="video-container absolute inset-0">
        <iframe
          title="Movie Trailer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </>
  );
};
export default VideoContainer;
