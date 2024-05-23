import React from 'react';
import styles from './FooterMenu.module.css';

export const FooterMenu = () => {
  return (
    <>
      <div className={styles.footerMenuContainer}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="/">トップページ</a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/about/">会社概要</a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/about/yakkan.pdf" target="_blank">契約約款/申込時の確認事項</a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/privacy/">プライバシーポリシー</a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/law/">特定商取引に関する法律に基づく表示</a>
          </li>
        </ul>
      </div>
    </>
  );
};