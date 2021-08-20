import React, { useState } from 'react';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card } from '../../components'

import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveheight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
        <Logo src={logo} alt="Logo do restaurante" />
          <TextField
             label='Pesquisar Restaurantes'
             outlined
             trailingIcon={<SearchIcon role="button" icon="search"/>}
            ><Input
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            <CarouselTitle>
             Na sua Área
            </CarouselTitle>
            <Slider {...settings}>
              <Card photo={restaurante} title="Restaurante" />
              <Card photo={restaurante} title="Parque" />
              <Card photo={restaurante} title="Restaurante" />
              <Card photo={restaurante} title="Ifood" />
              <Card photo={restaurante} title="Restaurante" />
              <Card photo={restaurante} title="Parque" />
              <Card photo={restaurante} title="Restaurante" />
              <Card photo={restaurante} title="Ifood" />
            </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>  
  );
}
export default Home;