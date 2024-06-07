import { render, screen, fireEvent, cleanup } from '@testing-library/react';
// act を react からインポート
import { act } from 'react';
import { Home } from './Home';
// toBeInTheDocument を使用するために必要
import '@testing-library/jest-dom/extend-expect'; 

// Mocking the child components
jest.mock('../Header/Header', () => ({
  Header: ({ setActiveTab }) => (
    <div>
      <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
      <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
    </div>
  )
}));

jest.mock('../Footer/Footer', () => ({
  Footer: ({ setActiveTab }) => (
    <div>
      <button onClick={() => setActiveTab('tab1')}>Footer Tab 1</button>
      <button onClick={() => setActiveTab('tab2')}>Footer Tab 2</button>
    </div>
  )
}));

jest.mock('./ImageSlider/ImageSlider', () => ({
  ImageSlider: () => <div>Mocked ImageSlider</div>
}));

jest.mock('./Information/Information', () => ({
  Information: () => <div>Mocked Information</div>
}));

jest.mock('../OpticalAreaConnection/OpticalAreaConnection', () => ({
  OpticalAreaConnection: () => <div>Mocked OpticalAreaConnection</div>
}));

describe('Home Component', () => {
  afterEach(() => {
    cleanup(); // テストごとにクリーンアップ
    jest.clearAllMocks(); // テストごとにモックをクリア
  });

  it('should render the HomePage by default', () => {
    // 初期画面のレンダリングを確認
    render(<Home />);
    expect(screen.getByText(/Mocked ImageSlider/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Information/i)).toBeInTheDocument();
  });

  it('should switch to OpticalAreaConnection when tab2 is clicked', () => {
    // Tab 2 がクリックされたとき OpticalAreaConnection が表示されることを確認
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('Tab 2')); // Button の特定を改善
    });
    expect(screen.getByText(/Mocked OpticalAreaConnection/i)).toBeInTheDocument();
  });

  it('should switch to HomePage when tab1 is clicked from Footer', () => {
    // Footer の Tab 1 がクリックされたとき HomePage に戻ることを確認
    render(<Home />);
    act(() => {
      fireEvent.click(screen.getByText('Tab 2')); // 先に Tab 2 をクリック
      fireEvent.click(screen.getByText('Footer Tab 1')); // Footer の Tab 1 をクリック
    });
    expect(screen.getByText(/Mocked ImageSlider/i)).toBeInTheDocument();
    expect(screen.getByText(/Mocked Information/i)).toBeInTheDocument();
  });
});
