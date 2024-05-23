import React from 'react';
import { Header } from '../Header/Header';
import { Information } from './Information/Information';
import { Footer } from '../Footer/Footer';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />
      <body className={styles.body}>
        <div className={styles.information}>
          <Information />
        </div>
      </body >
      <Footer />
    </>
  );
};