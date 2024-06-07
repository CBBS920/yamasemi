import React, { useState } from 'react';
import { TOP_PAGE,
  OPTICAL_AREA_CONNECTION,
  WIRELESS_AREA_CONNECTION,
  OPTIONAL_SERVICES,
  CABLE_LINE_SERVICES,
  IP_PHONE_SERVICES,
  KAWANE_PHONE_SERVICES,
  YAMASEMI_MOBILE,
  APPLICATION,
  APPLICATION_URL,
  CONTACT_INFOMATION,
  CONTACT_URL
 } from '../../../utils/constants';
import styles from './HamburgerMenu.module.css';

// メニューボタンコンポーネント
export const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // メニューの項目を押下時にメニューを閉じる処理
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={`${styles.icon} ${isOpen ? styles.active : ''}`} role="button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <button onClick={() => {
            props.setActiveTab('tab1');
            toggleMenu();
          }}>
            {TOP_PAGE}
          </button>
          <button onClick={() => {
            props.setActiveTab('tab2');
            toggleMenu();
          }}>
            {OPTICAL_AREA_CONNECTION}
          </button>
          <a href="/">{WIRELESS_AREA_CONNECTION}</a>
          <a href="/">{OPTIONAL_SERVICES}</a>
          <a href="/">{CABLE_LINE_SERVICES}</a>
          <a href="/">{IP_PHONE_SERVICES}</a>
          <a href="/">{KAWANE_PHONE_SERVICES}</a>
          <a href="/">{YAMASEMI_MOBILE}</a>
          <a href={APPLICATION_URL}>{APPLICATION}</a>
          <a href={CONTACT_URL}>{CONTACT_INFOMATION}</a>
        </div>
      )}
    </div>
  );
};
