import React, { useState, useEffect } from "react";
import image1 from '../../../img/b1.jpg';
import image2 from '../../../img/b2.png';
import image3 from '../../../img/b3.png';
import styles from "./ImageSlider.module.css";

const images = [image1, image2, image3];

// スライド広告コンポーネント
export const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 4秒後にスライドさせる処理
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentIndex * 1020}px)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} />
                    ))}
                </div>
                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};
