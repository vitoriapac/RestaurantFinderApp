import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components'

import { Container, Search, Logo, Wrapper, CarouselTitle } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveheight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

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
               onKeyPress={handleKeyPress}
               onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
            <CarouselTitle>
             Na sua Área
            </CarouselTitle>
            <Slider {...settings}>
              {restaurants.map((restaurant) =>
              <Card
              key={restaurant.place_id}
              photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />)}
            </Slider>
        </Search>

        {restaurants.map(
          (restaurant) => (<RestaurantCard restaurant={restaurant}/>
        ))}

      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>  
  );
}
export default Home;