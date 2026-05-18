import LoginSignup from "@/components/auth/Login";
import Browse from "@/components/Browse";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignup />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
