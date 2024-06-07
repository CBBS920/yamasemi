import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Home } from '../components/Home/Home';
// toBeInTheDocument マッチャーを使用するために必要
import '@testing-library/jest-dom'; 

jest.mock('../components/Home/Home', () => ({
  Home: () => <div>Mocked Home Component</div>
}));

describe('App Component', () => {
  it('should render the Home component', () => {
    // Homeコンポーネントが正しくレンダリングされることを確認します
    render(<App />);
    
    // "Mocked Home Component" というテキストが表示されることを確認します
    const homeElement = screen.getByText(/Mocked Home Component/i);
    
    // 要素が存在するかどうかをチェック
    expect(homeElement).toBeInTheDocument();
  });
});
