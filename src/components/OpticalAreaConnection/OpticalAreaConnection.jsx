import React from 'react';
import h2 from '../../img/h2_hikari_01.png';
import body from '../../img/img_hikari_01.jpg';
import button from '../../img/img_formlink.png';
import { KOME, OPTICAL_AREA_NOTES, APPLICATION_URL } from '../../utils/constants';
import styles from './OpticalAreaConnection.module.css';

// 光エリア接続サービスコンポーネント
export const OpticalAreaConnection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>
                <img src={h2} alt="heading image" />
            </h2>
            <div className={styles.body}>
                <img src={body} alt="body image" />
            </div>
            <ul className={styles.ul}>
                <li className={styles.li}><span>{KOME}</span>{OPTICAL_AREA_NOTES.ONE}</li>
                <li className={styles.li}><span>{KOME}</span>{OPTICAL_AREA_NOTES.TWO}</li>
                <li className={styles.li}><span>{KOME}</span>{OPTICAL_AREA_NOTES.THREE}</li>
                <li className={styles.li}><span>{KOME}</span>{OPTICAL_AREA_NOTES.FOUR}</li>
            </ul>
            <div className={styles.mousikomi}>
                <a href={APPLICATION_URL}>
                    <img src={button} alt="application button" />
                </a>
            </div>
        </div>
    );
};
