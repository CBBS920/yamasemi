import React from 'react';
import { Header } from '../Header/Header';
import { Board } from './Board/Board';
import { Footer } from '../Footer/Footer';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />
      <body className={styles.body}>
        <div className={styles.board}>
          <Board />
        </div>
      </body >
      <Footer />
    </>
  );
};