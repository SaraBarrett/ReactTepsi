import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Homepage = () => {
  const location = useLocation();
  const message = location.state?.message;

  const { user, logout } = useContext(AuthContext);
  console.log(user)

  return (
    <div>
      {message && <p>{message}</p>}
      <div>Homepage</div>
      <h4>As minhas funcionalidades</h4>
      <Link to="/shopping">Shopping</Link>
      <br />
      <Link to="/exs">Exs</Link>
      <br />
      <Link to="/events">Events</Link>
      <br />
      <Link to="/StarWars">StarWars</Link>
      <br />

      {user && user.type == "student" && <Link to="/places">Lugares a Visitar</Link>}

      <br />
      {!user ? (
        <div>
          <Link to="/Signup">Registo</Link>
          <br />
          <Link to="/login">Login</Link>
          <br />
        </div>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};
