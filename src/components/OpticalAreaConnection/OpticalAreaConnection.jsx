import React from 'react';
import h2 from '../../img/h2_hikari_01.png';
import body from '../../img/img_hikari_01.jpg';
import button from '../../img/img_formlink.png';
import styles from './OpticalAreaConnection.module.css';

// 光エリア接続サービスコンポーネント
export const OpticalAreaConnection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>
                <img src={h2} />
            </h2>
            <div className={styles.body}>
                <img src={body} />
            </div>
            <ul className={styles.ul}>
                <li className={styles.li}><span>※</span>表記プランは、光エリアのみご利用頂けます。</li>
                <li className={styles.li}><span>※</span>各プランには、回線利用料の他、プロバイダ料金が含まれています。</li>
                <li className={styles.li}><span>※</span>本サービスの最低利用期間は2年間となります。</li>
                <li className={styles.li}><span>※</span>本サービスはベストエフォートでの提供となり、通信速度を保証するものではありません。</li>
            </ul>
            <div className={styles.mousikomi}>
                <a href="https://secure.pxbb.jp/~yamasemi/entry_service">
                    <img src={button} />
                </a>
            </div>
        </div>
    );
};
