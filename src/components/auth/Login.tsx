import { useState } from "react";
import Header from "../header/Header";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
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
            <form className="w-full mx-auto flex flex-col space-y-4">
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="name"
                  id="name"
                  name="name"
                />
              )}{" "}
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="email"
                id="email"
                name="email"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-800 p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="current-password"
                id="password"
                name="password"
              />
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
