import React from 'react';
import { render } from '@testing-library/react';

import Head from '../../components/Head';

jest.mock('next/head', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Head', () => {
  it('should be able to render Head and props', () => {
    const { container, getByText, debug } = render(
      <Head title="Badges Generator" />,
    );

    expect(container.querySelector('title')).toContainElement(
      getByText('Badges Generator'),
    );
  });
});
