import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { Quiz } from "../components/quiz";

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
