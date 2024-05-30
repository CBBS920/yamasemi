import React from 'react';
import styles from './FooterMenu.module.css';

// フッターのメニューコンポーネント
export const FooterMenu = () => {
  return (
    <>
      <div className={styles.footerMenuContainer}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="/" className={styles.a}>トップページ</a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/about/" className={styles.a}>
              会社概要
            </a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/about/yakkan.pdf" target="_blank" className={styles.a}>
              契約約款/申込時の確認事項
            </a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/privacy/" className={styles.a}>
              プライバシーポリシー
            </a>
          </li>
          <li className={styles.li}>
            <a href="http://www.yamasemi.ne.jp/law/" className={styles.a}>
              特定商取引に関する法律に基づく表示
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};