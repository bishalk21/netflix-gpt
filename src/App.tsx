import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/appRouter";
import { useAppDispatch } from "./utils/hooks";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./reducer-actions/userSlice";

function App() {
  // when user signs up or logs in successfully,
  // we can dispatch the addUser action to update the user state in the Redux store.
  // Firebase auth methods return a user object upon successful authentication,
  // which we can use to populate our user state.
  // onAuthStateChanged listener can also be set up to
  // automatically update the user state whenever the authentication state changes
  // (e.g., user logs in, logs out, or the app initializes and
  // checks for an existing session).
  // this should be implemented in a higher-level component (like App.tsx)
  // to ensure that the user state is managed globally across the application.
  // this should be done once (user signs up or logs in) and not on every render,
  // so we can use useEffect with an empty dependency array to set up the listener.
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth instance
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // Dispatch the addUser action with the user data to update the Redux store
        dispatch(
          addUser({ id: uid, email: email || "", name: displayName || "" }),
        );
        console.log("User is signed in:", {
          id: uid,
          email: email,
          name: displayName,
        });
      } else {
        // User is signed out
        dispatch(removeUser()); // Dispatch the removeUser action to clear the user state in the Redux store
        console.log("User is signed out");
      }
    });
  }, []);
  return (
    <div className="netflix-body">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
