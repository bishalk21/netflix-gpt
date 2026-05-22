import { auth } from "@/config/firebaseConfig";
import { addUser, removeUser } from "@/reducer-actions/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user); // Access the user state from the Redux store using the useAppSelector hook
  const handleSignOut = () => {
    // Here you would typically call your sign-out logic, such as Firebase's signOut method
    signOut(auth)
      .then(() => {
        // Sign-out successful, dispatch the removeUser action to update the Redux store
        // dispatch(removeUser());
        navigate("/"); // Redirect to the login page after signing out
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error signing out:", error);
      });
  };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ id: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // good hygiene practice:
    // useEffect is called once when the component mounts,
    // & header component is rendered on every page (multiple sessions)
    // this will continuously keep attaching new listeners on every render
    // (onAuthStateChanged code is executed on every render)
    // which can lead to memory leaks and unexpected behavior.
    // to prevent this, we can return a cleanup function from useEffect that
    // unsubscribes the listener when the component unmounts.
    // Unsubscribe the onAuthStateChanged listener when Header comp unloads.
    return () => unsubscribe();
  }, []);

  return (
    <div className="netflix-header absolute top-0 left-0 w-full px-8 py-6 z-10 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-red-600">Netflix GPT</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <p className="text-white">Welcome, {user.name}!</p>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ml-4 transition-colors duration-300"
              onClick={() => handleSignOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
