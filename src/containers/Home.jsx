import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState/';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.trends && (
        <Categories title="Tendencias">
          <Carousel>
            {initialState.trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {initialState.originals && (
        <Categories title="Original">
          <Carousel>
            {initialState.originals.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};

export default Home;