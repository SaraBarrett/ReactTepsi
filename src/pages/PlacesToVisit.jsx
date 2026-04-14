import Places from "../components/places/places";
import { useEffect, useState } from "react";
import { updatePlaces } from "../http";

const PlacesToVisit = () => {
  const [availablePlaces, setAvailablePlaces] = useState(null);
  const [userPlaces, setuserPlaces] = useState(null);

  //busca os dados do places disponiveis
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });
  }, []);

  //busca os dados do places do user
  useEffect(() => {
    fetch("http://localhost:3000/user-places")
      .then((response) => response.json())
      .then((resData) => {
        setuserPlaces(resData.places);
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

  function deletePlace(selectedPlace){

    //actualização visual
    setuserPlaces((prevPickedPlaces) =>
    prevPickedPlaces.filter((place) => place.id !== selectedPlace.id),
  );

  //actualização api
  updatePlaces(userPlaces.filter((place) => place.id != selectedPlace.id));
  }

  return (
    <div>
      <h5>Lugares a visitar</h5>
      <p>Preparando as Férias</p>
      <Places
        onSelectPlace={deletePlace}
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
