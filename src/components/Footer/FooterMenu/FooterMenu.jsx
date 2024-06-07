import React from 'react';
import { HOME_URL,
  TOP_PAGE,
  COMPANY_PROFILE_URL,
  COMPANY_PROFILE,
  COVENANTS_URL,
  COVENANTS,
  PRIVACY_POLICY_URL,
  PRIVACY_POLICY,
  SPECIFIED_COMMERCIAL_TRANSACTIONS_URL,
  SPECIFIED_COMMERCIAL_TRANSACTIONS } from '../../../utils/constants';
import styles from './FooterMenu.module.css';

// フッターのメニューコンポーネント
export const FooterMenu = () => {
  return (
    <div className={styles.footerMenuContainer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href={HOME_URL} className={styles.a}>{TOP_PAGE}</a>
        </li>
        <li className={styles.li}>
          <a href={COMPANY_PROFILE_URL} className={styles.a}>
            {COMPANY_PROFILE}
          </a>
        </li>
        <li className={styles.li}>
          <a href={COVENANTS_URL} className={styles.a}>
            {COVENANTS}
          </a>
        </li>
        <li className={styles.li}>
          <a href={PRIVACY_POLICY_URL} className={styles.a}>
            {PRIVACY_POLICY}
          </a>
        </li>
        <li className={styles.li}>
          <a href={SPECIFIED_COMMERCIAL_TRANSACTIONS_URL} className={styles.a}>
            {SPECIFIED_COMMERCIAL_TRANSACTIONS}
          </a>
        </li>
      </ul>
    </div>
  );
};