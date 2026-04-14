import Places from "../components/places/places";
import { useEffect, useState } from "react";

const PlacesToVisit = () => {
  const [availablePlaces, setAvailablePlaces] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
       setAvailablePlaces(resData.places);
      });
  }, []);

  return (
    <div>
      <h5>Lugares a visitar</h5>
      <p>Preparando as Férias</p>
      <Places
        places={availablePlaces}
        title="Lugares disponíveis para visitar"
        fallbackText="Erro na ligação"
      />
    </div>
  );
};

export default PlacesToVisit;
