import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OpticalAreaConnection } from './OpticalAreaConnection';
import { KOME, OPTICAL_AREA_NOTES, APPLICATION_URL } from '../../utils/constants';
import h2 from '../../img/h2_hikari_01.png';
import body from '../../img/img_hikari_01.jpg';
import button from '../../img/img_formlink.png';
import React from 'react';

describe('OpticalAreaConnection Component', () => {

    it('should render the heading image correctly', () => {
        // Heading画像が正しくレンダリングされていることを確認します
        render(<OpticalAreaConnection />);
        const headingImage = screen.getByAltText(/heading image/i);
        expect(headingImage).toBeInTheDocument();
        expect(headingImage).toHaveAttribute('src', h2);
    });

    it('should render the body image correctly', () => {
        // Body画像が正しくレンダリングされていることを確認します
        render(<OpticalAreaConnection />);
        const bodyImage = screen.getByAltText(/body image/i);
        expect(bodyImage).toBeInTheDocument();
        expect(bodyImage).toHaveAttribute('src', body);
    });

    it('should render the list items correctly', () => {
        // リスト項目が正しくレンダリングされていることを確認します
        render(<OpticalAreaConnection />);
        Object.values(OPTICAL_AREA_NOTES).forEach(note => {
            const listItem = screen.getByText(new RegExp(note, 'i'));
            expect(listItem).toBeInTheDocument();
        });
    });

    it('should render the application button image correctly', () => {
        // 申込ボタンの画像が正しくレンダリングされていることを確認します
        render(<OpticalAreaConnection />);
        const buttonImage = screen.getByAltText(/application button/i);
        expect(buttonImage).toBeInTheDocument();
        expect(buttonImage).toHaveAttribute('src', button);
    });

    it('should have the correct link for the application button', () => {
        // 申込ボタンのリンクが正しいことを確認します
        render(<OpticalAreaConnection />);
        const buttonLink = screen.getByRole('link', { name: /application button/i });
        expect(buttonLink).toBeInTheDocument();
        expect(buttonLink).toHaveAttribute('href', APPLICATION_URL);
    });

});
