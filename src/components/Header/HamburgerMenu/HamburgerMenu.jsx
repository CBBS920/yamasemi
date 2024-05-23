import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={`${styles.icon} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <a href="/about">トップページ</a>
          <a href="/">光エリア接続サービス</a>
          <a href="/">無線エリア接続サービス</a>
          <a href="/">オプションサービス</a>
          <a href="/">ケーブルラインサービス</a>
          <a href="/">050IP 電話サービス</a>
          <a href="/">かわねフォンサービス</a>
          <a href="/">やませみモバイル</a>
          <a href="https://secure.pxbb.jp/~yamasemi/entry_service/">お申込み</a>
          <a href="http://www.yamasemi.ne.jp/contact/">お問い合わせ・資料請求</a>
        </div>
      )}
    </div>
  );
};
