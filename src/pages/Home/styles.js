import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 1rem;
`;

export const Logo = styled.img`
  margin-bottom: 1.25rem;
`;

export const Map = styled.div`
  background-color: green;
  width: 100vw;
  height: 100vh;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 2rem;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 1rem 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 0.75rem;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 0.75rem;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
  line-height: 19px;
  font-size: 1rem;
`;
