import React from "react";
import styled from "styled-components";

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

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </ Card>
);

export default ImageCard;