import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import useInitialState from '../hooks/useInitialState';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search isHome />

      {myList && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem 
                key={item.id} 
                {...item} 
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      {trends && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {originals && (
        <Categories title="Original">
          <Carousel>
            {originals.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);