import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from "../../assets/restaurante-fake.png"

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5}
      isHalf={true} activeColor="#e7711c"
      edit={false} value={4}/>
      <Address>Rua Rio Claro, 342</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="foto do restaurante"/>
  </Restaurant>
);

export default RestaurantCard;
