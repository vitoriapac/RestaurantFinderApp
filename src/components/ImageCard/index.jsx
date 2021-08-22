import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Skeleton from '../Skeleton'

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`
const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  color: #fff;
`

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);  
  useEffect(() => {
    const imageLoader = new Image(); 
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return(
    <>
    {imageLoaded ? (
      <Card photo={photo}>
        <Title>{title}</Title>
      </ Card>
    ) : <Skeleton width='90px' height='90px' />}
    </>
  )
};

export default ImageCard;