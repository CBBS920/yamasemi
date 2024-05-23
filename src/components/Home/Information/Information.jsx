import React from 'react';
import h1 from '../../../img/h1_info.png'
import styles from './Information.module.css';

export const Information = () => {
  return (
    <>
      <div className={styles.infoContainer}>
        <h1>
          <img src={h1} alt="お知らせ" />
        </h1>
        <dl>
          <dt>
            <span>2024年 5月 20日</span>
          </dt>
          <dd>
            <a href='http://www.yamasemi.ne.jp/news/?p=2442'>
            <span class="title">【注意喚起】偽ショッピングサイトにご注意ください</span>
            <span class="text"></span>
            </a>
          </dd>
        </dl>
        <a className={styles.nextURL} href="http://www.yamasemi.ne.jp/news/">一覧を確認する→</a>
      </div>
    </>
  );
};