import { useEffect } from "react";
import MainLayout from "./MainLayout";
import { fetchNowPlayingMovies } from "@/services/tmdbService";

const Browse = () => {
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
  return (
    <MainLayout>
      <div className="browse-page"> </div>
    </MainLayout>
  );
};

export default Browse;
