import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer-actions/userSlice";
import moviesReducer from "../reducer-actions/movieSlice";
import gptReducer from "../reducer-actions/gptSlice";
import appConfigReducer from "../reducer-actions/appConfigSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    appConfig: appConfigReducer,
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
