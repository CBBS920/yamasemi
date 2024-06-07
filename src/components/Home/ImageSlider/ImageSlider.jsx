import React, { useState, useEffect } from "react";
import image1 from '../../../img/b1.jpg';
import image2 from '../../../img/b2.png';
import image3 from '../../../img/b3.png';
import { STATE_START_VALUE, SLIDE_VALUE, SLIDE_IMG_SIZE } from '../../../utils/constants';
import styles from "./ImageSlider.module.css";

const images = [image1, image2, image3];

// スライド広告コンポーネント
export const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(STATE_START_VALUE);

    // 4秒後にスライドさせる処理
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - SLIDE_VALUE.ONE ? SLIDE_VALUE.ZERO : prevIndex + SLIDE_VALUE.ONE
            );
        }, SLIDE_VALUE.TIME);
        return () => clearInterval(interval);
    }, []);

    // グレーの●マーク押下時に不随する画像にスライドさせる処理
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentIndex * SLIDE_IMG_SIZE}px)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} />
                    ))}
                </div>
                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                            role="button" // ボタンとしての役割を追加
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};
