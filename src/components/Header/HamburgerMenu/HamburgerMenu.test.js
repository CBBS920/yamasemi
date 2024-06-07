import { render, screen, fireEvent } from '@testing-library/react';
import { HamburgerMenu } from './HamburgerMenu';
import '@testing-library/jest-dom/extend-expect';
import { TOP_PAGE, OPTICAL_AREA_CONNECTION } from '../../../utils/constants';

// モック関数を作成
const mockSetActiveTab = jest.fn();

describe('HamburgerMenu Component', () => {
  beforeEach(() => {
    // 各テスト前にモック関数をリセット
    mockSetActiveTab.mockReset();
  });

  it('should render the menu button', () => {
    // メニューボタンがレンダリングされることを確認します
    render(<HamburgerMenu setActiveTab={mockSetActiveTab} />);
    const menuButton = screen.getByRole('button', { hidden: true });
    expect(menuButton).toBeInTheDocument();
  });

  it('should open the menu when the menu button is clicked', () => {
    // メニューボタンをクリックするとメニューが表示されることを確認します
    render(<HamburgerMenu setActiveTab={mockSetActiveTab} />);
    const menuButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(menuButton);
    expect(screen.getByText(TOP_PAGE)).toBeInTheDocument();
  });

  it('should close the menu when a menu item is clicked', () => {
    // メニューの項目をクリックするとメニューが閉じることを確認します
    render(<HamburgerMenu setActiveTab={mockSetActiveTab} />);
    const menuButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(menuButton);

    const topPageButton = screen.getByText(TOP_PAGE);
    fireEvent.click(topPageButton);
    expect(mockSetActiveTab).toHaveBeenCalledWith('tab1');
    expect(screen.queryByText(TOP_PAGE)).not.toBeInTheDocument();
  });

  it('should call setActiveTab with correct arguments when menu items are clicked', () => {
    // メニューの項目をクリックすると正しい引数で setActiveTab が呼ばれることを確認します
    render(<HamburgerMenu setActiveTab={mockSetActiveTab} />);
    const menuButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(menuButton);

    const opticalAreaButton = screen.getByText(OPTICAL_AREA_CONNECTION);
    fireEvent.click(opticalAreaButton);
    expect(mockSetActiveTab).toHaveBeenCalledWith('tab2');
  });
});
