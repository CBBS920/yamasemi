import { render, screen } from '@testing-library/react';
// act を react からインポート
import { act } from 'react'; 
import { Information } from './Information';
import '@testing-library/jest-dom/extend-expect';
import { CHECK_LIST } from '../../../utils/constants';

describe('Information Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // テストごとにモックをクリア
  });

  it('should render the Information component', () => {
    // Informationコンポーネントが正しくレンダリングされることを確認します
    act(() => {
      render(<Information />);
    });

    // 画像が表示されることを確認します
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'h1_info.png');

    // 日付が表示されることを確認します
    const dateElement = screen.getByText('2024年 5月 20日');
    expect(dateElement).toBeInTheDocument();

    // ニュースリンクが表示されることを確認します
    const newsLink = screen.getByRole('link', { name: /【注意喚起】偽ショッピングサイトにご注意ください/i });
    expect(newsLink).toBeInTheDocument();
    expect(newsLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/news/?p=2442');

    // Check listリンクが表示されることを確認します
    const checkListLink = screen.getByRole('link', { name: CHECK_LIST });
    expect(checkListLink).toBeInTheDocument();
    expect(checkListLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/news/');
  });
});
