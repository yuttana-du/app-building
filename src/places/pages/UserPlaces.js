import React from "react";
import { useParams } from "react-router";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UserPlaces = () =>{
    const userId = useParams().userId ;
    const loadedPlace = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlace}/>
};

export default UserPlaces;