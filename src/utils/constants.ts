// file to store any hardcoded data or constants that we want to use across the app
// this can include things like API endpoints, default values,
// or any other static data that doesn't change during runtimes
export const USER_PHOTO_URL =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"; // default profile picture URL for users who don't have one set
// base URL for fetching movie images from TMDB
export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export const TMDB_MOVIE_VIDEOS_BASE_URL = "https://api.themoviedb.org/3/movie"; // base URL for fetching movie videos from TMDB
export const TMDB_SEARCH_BASE_URL = "https://api.themoviedb.org/3/search/movie"; // base URL for searching movies on TMDB

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    label: "English",
    name: "English",
  },
  {
    identifier: "hi",
    label: "Hindi",
    name: "Hindi",
  },
  {
    identifier: "es",
    label: "Spanish",
    name: "Spanish",
  },
  {
    identifier: "ne",
    label: "Nepali",
    name: "Nepali",
  },
];
