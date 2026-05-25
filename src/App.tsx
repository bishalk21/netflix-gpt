import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/appRouter";

function App() {
  return (
    <div className="netflix-app">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
