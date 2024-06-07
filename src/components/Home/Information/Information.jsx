import React from 'react';
import h1 from '../../../img/h1_info.png';
import { CHECK_LIST, CHECK_LIST_URL } from '../../../utils/constants';
import styles from './Information.module.css';

// お知らせコンポーネント
export const Information = () => {
  return (
    <div className={styles.infoContainer}>
      <img src={h1} />
      <dl>
        <dt>
          <span>2024年 5月 20日</span>
        </dt>
        <dd>
          <a href='http://www.yamasemi.ne.jp/news/?p=2442'>
            <span>【注意喚起】偽ショッピングサイトにご注意ください</span>
            <span></span>
          </a>
        </dd>
      </dl>
      <a className={styles.nextURL} href={CHECK_LIST_URL}>{CHECK_LIST}</a>
    </div>
  );
};