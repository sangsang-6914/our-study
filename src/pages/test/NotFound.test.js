import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('render image', () => {
    const { getByAltText } = render(<NotFound path="/abc" />);
    const image = getByAltText('404');
    expect(image).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif',
    );
  });
});
