import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button', () => {
  it('should be able to render Button and props', () => {
    const { getByText } = render(<Button>Button text</Button>);

    expect(getByText('Button text')).toBeTruthy();
  });
});
