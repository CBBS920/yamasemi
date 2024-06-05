import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { Information } from './Information/Information';
import { OpticalAreaConnection } from '../OpticalAreaConnection/OpticalAreaConnection';
import { Footer } from '../Footer/Footer';
import styles from './Home.module.css';

// やませみトップ画面
export const Home = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  // 初期表示画面
  const HomePage = () => {
    return (
      <>
        <div>
          <ImageSlider />
        </div>
        <div className={styles.information}>
          <Information />
        </div>
      </>
    );
  };

  // メニュー押下時の画面切り替え処理
  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <HomePage />;
      case 'tab2':
        return <OpticalAreaConnection />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header setActiveTab={setActiveTab} />
      <div className={styles.body}>
        {renderContent()}
      </div>
      <Footer setActiveTab={setActiveTab} />
    </>
  );
};
