import { render, fireEvent } from '@testing-library/react';
import HeaderView from './HeaderView';

describe('Header', () => {
  it('header corretly', () => {
    const { getByText } = render(<HeaderView />);
    const link = getByText('Our Study');
    expect(link).toBeInTheDocument();
  });
});
