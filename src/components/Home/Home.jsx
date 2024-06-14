import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { Information } from './Information/Information';
import { OpticalAreaConnection } from '../OpticalAreaConnection/OpticalAreaConnection';
import { SignUP } from '../SignUP/SignUP';
import { Footer } from '../Footer/Footer';
import styles from './Home.module.css';

// やませみトップ画面
export const Home = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  // 初期表示画面
  const HomePage = () => {
    return (
      <>
        <ImageSlider />
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
      // case 'tab3':
      //   return <無線エリア接続サービス />;
      // case 'tab4':
      //   return <オプションサービス />;
      // case 'tab5':
      //   return <ケーブルライン />;
      // case 'tab6':
      //   return <050IP 電話サービス />;
      // case 'tab7':
      //   return <川根フォンサービス />;
      // case 'tab8':
      //   return <やませみモバイル />;
      case 'tab9':
        return <SignUP />;
      // case 'tab10':
      //   return <お問い合わせ・資料請求 />;
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
