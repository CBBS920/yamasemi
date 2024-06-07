import { render, screen } from '@testing-library/react';
import { FooterMenu } from './FooterMenu';
import '@testing-library/jest-dom/extend-expect';
import {
  TOP_PAGE,
  COMPANY_PROFILE,
  COVENANTS,
  PRIVACY_POLICY,
  SPECIFIED_COMMERCIAL_TRANSACTIONS
} from '../../../utils/constants';

describe('FooterMenu Component', () => {
  it('should render all menu links with correct href', () => {
    // フッターメニューが正しくレンダリングされることを確認します
    render(<FooterMenu />);

    // TOP_PAGEのリンクテスト
    const topPageLink = screen.getByText(TOP_PAGE).closest('a');
    expect(topPageLink).toHaveAttribute('href', '/');

    // COMPANY_PROFILEのリンクテスト
    const companyProfileLink = screen.getByText(COMPANY_PROFILE).closest('a');
    expect(companyProfileLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/about/');

    // COVENANTSのリンクテスト
    const covenantsLink = screen.getByText(COVENANTS).closest('a');
    expect(covenantsLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/about/yakkan.pdf');

    // PRIVACY_POLICYのリンクテスト
    const privacyPolicyLink = screen.getByText(PRIVACY_POLICY).closest('a');
    expect(privacyPolicyLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/privacy/');

    // SPECIFIED_COMMERCIAL_TRANSACTIONSのリンクテスト
    const specifiedCommercialTransactionsLink = screen.getByText(SPECIFIED_COMMERCIAL_TRANSACTIONS).closest('a');
    expect(specifiedCommercialTransactionsLink).toHaveAttribute('href', 'http://www.yamasemi.ne.jp/law/');
  });
});
