import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer-actions/userSlice";
import moviesReducer from "../reducer-actions/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for actions and state
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
