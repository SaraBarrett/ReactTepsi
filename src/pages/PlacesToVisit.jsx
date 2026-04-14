import Places from "../components/places/places";
import { useEffect, useState } from "react";
import { updatePlaces } from "../http";

const PlacesToVisit = () => {
  const [availablePlaces, setAvailablePlaces] = useState(null);
  const [userPlaces, setuserPlaces] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });
  }, []);


  function updatePlace(selectedPlace) {
    //actualiza visualmente
    setuserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      
      return [selectedPlace, ...prevPickedPlaces];
    });

    //actualiza na api
    const updatedPlaces = [selectedPlace, ...userPlaces];
    updatePlaces(updatedPlaces);

  }

  return (
    <div>
      <h5>Lugares a visitar</h5>
      <p>Preparando as Férias</p>
      <Places
        places={userPlaces}
        title="Os Lugares que eu escolhi"
        fallbackText="Ainda não existem lugares escolhidos"
      />
      <Places
        places={availablePlaces}
        title="Lugares disponíveis para visitar"
        fallbackText="Erro na ligação"
        onSelectPlace={updatePlace}
      />
    </div>
  );
};

export default PlacesToVisit;
