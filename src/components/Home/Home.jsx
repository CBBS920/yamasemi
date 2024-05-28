import React from 'react';
import { Header } from '../Header/Header';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { Information } from './Information/Information';
import { Footer } from '../Footer/Footer';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />
      <body className={styles.body}>
        <div>
          <ImageSlider />
        </div>
        <div className={styles.information}>
          <Information />
        </div>
      </body >
      <Footer />
    </>
  );
};