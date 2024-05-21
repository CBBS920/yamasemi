import React from 'react';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { Home } from '../Home/Home'
import logo from '../../img/logo.png'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
          <a href={Home} className={styles.icon}>
            <img src={logo} alt='やませみネット' />
          </a>
          <p className={styles.tag}>やませみネット | 榛原郡川根本町 超高速ブロードバンドサービス</p>
      </div>
      <HeaderMenu />
    </>
  );
};