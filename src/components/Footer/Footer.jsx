import React from 'react';
import { FooterMenu } from './FooterMenu/FooterMenu';
import { YAMASEMI_NET_CBBS, KAWANE_ADDRESS, COPYRIGHT } from '../../utils/constants';
import logo from '../../img/logo_footer.png';
import styles from './Footer.module.css';

// フッターコンポーネント
export const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <FooterMenu setActiveTab={props.setActiveTab} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.yamasemi}>
            {YAMASEMI_NET_CBBS}
          </p>
          <p className={styles.yamasemi}>
            {KAWANE_ADDRESS}
          </p>
          <p className={styles.yamasemi}>
            {COPYRIGHT}
          </p>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Footer Logo" />
        </div>
      </div>
    </div>
  );
};
