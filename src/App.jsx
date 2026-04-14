import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Shopping } from "./pages/Shopping";
import { Events } from "./pages/Events";
import { Exs } from "./pages/Exs";
import { RootLayout } from "./components/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { HelloUser } from "./pages/HelloUser";
import PlacesToVisit from "./pages/PlacesToVisit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/shopping", element: <Shopping /> },
      { path: "/events", element: <Events /> },
      { path: "/exs", element: <Exs /> },
      { path: "/", element: <Homepage /> },
      { path: "/user/:name", element: <HelloUser /> },
      { path: "/places", element: <PlacesToVisit/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
