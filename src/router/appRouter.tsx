import LoginSignup from "@/components/auth/Login";
import Browse from "@/components/browse/Browse";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignup />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/signup",
    element: <LoginSignup />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
