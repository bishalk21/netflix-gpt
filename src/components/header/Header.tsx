import { useAppSelector } from "@/utils/hooks";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Get the Firebase Auth instance
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
          <p>Please log in to continue.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
