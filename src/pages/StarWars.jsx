import { useEffect, useState } from "react";

export const StarWars = () => {
const [films, setFilms] = useState(null);
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((resData) => {
       setFilms(resData.results);
      });
  }, []);


  return <div>Aqui estão os filmes de Start Wars 

{(!films || films.length == 0) && <p> Não tem ainda filmes</p>}
        {(films &&  films.length >0) && films.map((film) => (
        <p key={films.title}>
            {film.title}
        </p>))}

  </div>;
};
