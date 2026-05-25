import type { ReactNode } from "react";
import Header from "./header/Header";
import { toggleGptSearchView } from "@/reducer-actions/gptSlice";
import { useAppDispatch } from "@/utils/hooks";

type MainLayoutProps = {
  children: ReactNode; // This prop will hold the content that is passed to the MainLayout component
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const dispatch = useAppDispatch();
  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="netflix-body relative h-screen w-screen">
      {/* This is where the main content of the app will be rendered based on the route */}
      <Header />
      {children}
      <div className="fixed bottom-8 right-8 z-20">
        <button
          className="bg-amber-100 hover:bg-amber-200 text-black font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-lg flex items-center space-x-2"
          onClick={handleGPTSearchClick}
        >
          <i className="fas fa-robot mr-2"></i>
          Ask GPT
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url("/netflix-bg.jpg")`,
        }}
      />
    </div>
  );
};

export default MainLayout;
