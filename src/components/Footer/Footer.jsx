import React from 'react';
import { FooterMenu } from './FooterMenu/FooterMenu';
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
            やませみネット │ CBBS株式会社
          </p>
          <p className={styles.yamasemi}>
            〒428-0313 静岡県榛原郡川根本町上長尾837番地3　TEL．050-5894-2700
          </p>
          <p className={styles.yamasemi}>
            copyright(c)2021 YamasemiNet CBBS All rights reserved.
          </p>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt='やませみネット' />
        </div>
      </div>
    </div>
  );
};