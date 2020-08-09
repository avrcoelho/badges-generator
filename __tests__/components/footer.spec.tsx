import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../components/Footer';

describe('Footer', () => {
  it('should be able to render Footer', () => {
    const { getByAltText, getByText } = render(<Footer />);

    expect(getByAltText('andrecoelho.dev')).toBeTruthy();
    expect(getByText('developed by')).toBeTruthy();
  });
});
