import React from 'react';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import logo from '../../img/logo.png';
import link from '../../img/nav-header_link.png';
import styles from './Header.module.css';

// ヘッダーコンポーネント
export const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <a href="/" className={styles.icon}>
          <img src={logo} alt='やませみネット' />
        </a>
        <p className={styles.tag}>やませみネット | 榛原郡川根本町 超高速ブロードバンドサービス</p>
      </div>
      <div className={styles.centerContainer}>
        <a href='http://www.cbbs.jp' target='_blank'>
          <img src={link} alt="CBBS株式会社" height="35" width="375" />
        </a>
      </div>
      <div className={styles.rightContainer}>
        <HamburgerMenu setActiveTab={props.setActiveTab} />
      </div>
    </div>
  );
};
