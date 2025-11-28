import { createBrowserRouter, RouterProvider } from "react-router";
import { Quiz } from "../components/quiz";
import App from "../App";

export const Routes = () => {
  const pages = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);
  return <RouterProvider router={pages} />;
};
