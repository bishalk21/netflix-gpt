import { useMovieVideos } from "@/hooks/useMovieVideos";
import { useAppSelector } from "@/utils/hooks";

const VideoContainer = ({ movieId }: { movieId: number }) => {
  const trailerVideo = useAppSelector((state) => state.movies.trailerVideo);
  useMovieVideos(movieId);
  return (
    <>
      <div className="video-container absolute w-screen inset-0 aspect-video">
        <iframe
          title="Movie Trailer"
          className="w-screen h-screen object-cover aspect-video"
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
