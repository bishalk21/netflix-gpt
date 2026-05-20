import React, { useRef, useState } from "react";
import Header from "../header/Header";
import { validateUserInputs } from "@/utils/userFormValidation";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/utils/hooks";
import { addUser } from "@/reducer-actions/userSlice";

const LoginSignup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = getAuth(); // Get the Firebase Auth instance
  // either we can create state for each input field and make them controlled components
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // we can use useRef to create reference to the input fields and
  // access their values directly from the DOM.
  // This way we can avoid unnecessary re-renders and improve performance.
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate form data
    const message = validateUserInputs(
      // nameRef.current?.value ?? "",
      emailRef.current?.value ?? "",
      passwordRef.current?.value ?? "",
    );
    setErrorMessage(message ?? ""); // Set error message if validation fails, otherwise clear it
    if (message) return; // If there's a validation error, stop further processing
    // handle authentication logic here
    if (isSignUp) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current?.value ?? "",
        passwordRef.current?.value ?? "",
      )
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current?.value ?? "",
            photoURL: "https://example.com/default-profile-pic.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser!;
              dispatch(
                addUser({
                  id: uid,
                  email: email || "",
                  name: displayName || "",
                  photoURL: photoURL || "",
                }),
              );
              // You can redirect the user to the browse page or show a success message here
              // console.log("User signed up:", user);
              navigate("/browse");
            })
            .catch((error) => {
              // Handle errors from updateProfile here
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + ": " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage(
              "The email address is already in use by another account.",
            );
            return;
          }
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // login logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current?.value ?? "",
        passwordRef.current?.value ?? "",
      )
        .then(() => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("The email address is not valid.");
            return;
          }
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <div className="netflix-login relative h-screen w-full">
      <Header />
      <div className="relative h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/AU-en-20260511-TRIFECTA-perspective_95f2054c-6258-404b-abeb-9de3a5bbe1f6_small.jpg"
          alt="Netflix GPT"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 bg-top-right-no-repeat"
        />
        <div className="flex flex-col items-center justify-center h-screen w-full relative z-10 text-white">
          <div className="bg-black/60 p-8 py-10 rounded-md w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isSignUp ? "Create an account" : "Login to your account"}
            </h2>
            <form
              className="w-full mx-auto flex flex-col space-y-4"
              onSubmit={handleFormSubmit}
            >
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="name"
                  id="name"
                  name="name"
                  ref={nameRef}
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              )}{" "}
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="email"
                id="email"
                name="email"
                ref={emailRef}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="current-password"
                id="password"
                name="password"
                ref={passwordRef}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4 transition-colors duration-300"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <span
                  onClick={() => toggleSignUp()}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  {isSignUp ? "Login Now" : "Sign Up Now"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
