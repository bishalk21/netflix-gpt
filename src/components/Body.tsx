import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/router/appRouter";

const Body = () => {
  return (
    <div className="netflix-body">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
