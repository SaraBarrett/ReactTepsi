import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      <div>Homepage</div>
      <h4>As minhas funcionalidades</h4>
      <Link to="/shopping">Shopping</Link>
      <br />
      <Link to="/exs">Exs</Link>
      <br />
      <Link to="/events">Events</Link>
      <Link to="/StarWars">StarWars</Link>
      <br />
      <Link to="/places">Lugares a Visitar</Link>
    </div>
  );
};
