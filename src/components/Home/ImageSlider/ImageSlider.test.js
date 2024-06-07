import { render, screen, fireEvent } from '@testing-library/react';
// act を react からインポート
import { act } from 'react'; 
import { ImageSlider } from './ImageSlider';
import '@testing-library/jest-dom/extend-expect';
import image1 from '../../../img/b1.jpg';
import image2 from '../../../img/b2.png';
import image3 from '../../../img/b3.png';

jest.useFakeTimers(); // タイマーをモック

describe('ImageSlider Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // テストごとにモックをクリア
    jest.clearAllTimers(); // タイマーをクリア
  });

  it('should render the first image by default', () => {
    // 初期状態で最初の画像が表示されていることを確認
    render(<ImageSlider />);
    const firstImage = screen.getByAltText('Slide 0');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', image1);
  });

  it('should automatically slide to the next image after 4 seconds', () => {
    // 4秒後に次の画像にスライドすることを確認
    render(<ImageSlider />);
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    const secondImage = screen.getByAltText('Slide 1');
    expect(secondImage).toBeInTheDocument();
    expect(secondImage).toHaveAttribute('src', image2);
  });

  it('should slide to the selected image when dot is clicked', () => {
    // ドットがクリックされたときに対応する画像にスライドすることを確認
    render(<ImageSlider />);
    const dots = screen.getAllByRole('button'); // ここでボタンとしてドットを取得
    act(() => {
      fireEvent.click(dots[2]); // 3つ目のドットを選択
    });
    const thirdImage = screen.getByAltText('Slide 2');
    expect(thirdImage).toBeInTheDocument();
    expect(thirdImage).toHaveAttribute('src', image3);
  });
});
