import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Header from './Header';

describe('Header', () => {
  it('header corretly', () => {
    const { container } = render(<Header />);
    const link = screen.getByText('Our Study');
    expect(link).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
