import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Results from '../../components/Results';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Results', () => {
  it('should be able to render Results and props', () => {
    const { getByText, getAllByText } = render(
      <Results markdown="markdown result" html="html result" />,
    );

    expect(getByText('markdown result')).toBeDefined();
    expect(getAllByText('html result').length).toBe(2);
  });

  it('should be able to copy result', async () => {
    jest.spyOn(navigator.clipboard, 'writeText');

    const { getByText, container } = render(
      <Results markdown="markdown result" html="html result" />,
    );

    fireEvent.click(container.querySelectorAll('button')[0]);

    await waitFor(() => {
      expect(getByText('Copied')).toBeDefined();
    });

    fireEvent.click(container.querySelectorAll('button')[1]);

    jest.spyOn(navigator.clipboard, 'writeText');

    await waitFor(() => {
      expect(getByText('Copied')).toBeDefined();
    });
  });
});
