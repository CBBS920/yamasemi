import React from 'react';
import { Header } from '../Header/Header';
import { Board } from './Board/Board';
import { Information } from './Information/Information';
import { Menu } from './Menu/Menu';
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <>
      <Header />
        <Board />
        <Information />
        <Menu />
      <Footer />
    </>
  );
};