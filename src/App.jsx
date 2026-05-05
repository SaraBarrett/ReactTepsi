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
import { StarWars } from "./pages/StarWars";
import { Signup } from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import { AuthProvider } from "./contexts/AuthContext";
import StudentProtection from "./protectedRoutes/studentProtection";

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
      { path: "/places", element:<StudentProtection element={<PlacesToVisit/>} /> },
      { path: "/StarWars", element: <StarWars /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/login", element: <LoginForm /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
