import type { ReactNode } from "react";
import Header from "./header/Header";

type MainLayoutProps = {
  children: ReactNode; // This prop will hold the content that is passed to the MainLayout component
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="netflix-body">
      {/* This is where the main content of the app will be rendered based on the route */}
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
