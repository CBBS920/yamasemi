import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom/extend-expect';
import logo from '../../img/logo.png';
import link from '../../img/nav-header_link.png';
import { YAMASEMI_NET_KBBS } from '../../utils/constants';

// モック関数を作成
const mockSetActiveTab = jest.fn();

// HamburgerMenuをモック
jest.mock('./HamburgerMenu/HamburgerMenu', () => ({
  HamburgerMenu: ({ setActiveTab }) => (
    <button data-testid="hamburger-menu" onClick={() => setActiveTab('testTab')}>
      Menu
    </button>
  )
}));

describe('Header Component', () => {
  beforeEach(() => {
    // 各テスト前にモック関数をリセット
    mockSetActiveTab.mockReset();
  });

  it('should render the logo and link with correct href', () => {
    // ロゴとリンクが正しい href でレンダリングされることを確認します
    render(<Header setActiveTab={mockSetActiveTab} />);

    // ロゴのテスト
    const logoElement = screen.getByAltText('Logo').closest('a');
    expect(logoElement).toHaveAttribute('href', '/');
    expect(screen.getByAltText('Logo')).toHaveAttribute('src', logo);

    // 中央リンクのテスト
    const centerLink = screen.getByAltText('Center Link').closest('a');
    expect(centerLink).toHaveAttribute('href', 'http://www.cbbs.jp');
    expect(screen.getByAltText('Center Link')).toHaveAttribute('src', link);
  });

  it('should render the YAMASEMI_NET_KBBS tag', () => {
    // YAMASEMI_NET_KBBS タグがレンダリングされることを確認します
    render(<Header setActiveTab={mockSetActiveTab} />);
    const tagElement = screen.getByText(YAMASEMI_NET_KBBS);
    expect(tagElement).toBeInTheDocument();
  });

  it('should render the HamburgerMenu and respond to clicks', () => {
    // ハンバーガーメニューがレンダリングされ、クリックに応答することを確認します
    render(<Header setActiveTab={mockSetActiveTab} />);

    const hamburgerButton = screen.getByTestId('hamburger-menu');
    expect(hamburgerButton).toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(mockSetActiveTab).toHaveBeenCalledWith('testTab'); // クリックイベントで関数が呼ばれることを確認
  });
});
