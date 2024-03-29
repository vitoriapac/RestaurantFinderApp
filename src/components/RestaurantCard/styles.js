import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 1rem;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  transition: 0.4s ease;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  display: ${(props) => (props.imageLoaded ? "block" : "none")};
  object-fit: cover;
  border-radius: 6px;
`;
