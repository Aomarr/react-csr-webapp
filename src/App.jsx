import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root";
import User from "./pages/singleuser/User";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/:id",
      element: <User/>
    }
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
