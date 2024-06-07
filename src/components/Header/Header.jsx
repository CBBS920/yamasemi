import React from 'react';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import logo from '../../img/logo.png';
import link from '../../img/nav-header_link.png';
import { YAMASEMI_NET_KBBS, CBBS_URL } from '../../utils/constants';
import styles from './Header.module.css';

// ヘッダーコンポーネント
export const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <a href="/" className={styles.icon}>
          <img src={logo} alt="Logo" />
        </a>
        <p className={styles.tag}>{YAMASEMI_NET_KBBS}</p>
      </div>
      <div className={styles.centerContainer}>
        <a href={CBBS_URL}>
          <img src={link} alt="Center Link" />
        </a>
      </div>
      <div className={styles.rightContainer}>
        <HamburgerMenu setActiveTab={props.setActiveTab} />
      </div>
    </div>
  );
};
