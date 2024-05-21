import React from 'react';
import { Notice } from './Notice/Notice';
import { Service } from './Service/Service';

export const Information = () => {
  return (
    <>
        <div>インフォメーション</div>
        <Notice />
        <Service />
    </>
  );
};