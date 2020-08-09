import React from 'react';
import { render } from '@testing-library/react';

import { optionsStyles } from '../../constants/optionStyles';

import Select from '../../components/Select';

const mockedError = jest.fn();

mockedError.mockImplementation(() => undefined);

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'test',
        defaultValue: '',
        error: mockedError(),
        registerField: jest.fn(),
      };
    },
  };
});

describe('Select', () => {
  const props = {
    label: 'Label',
    name: 'player',
    options: optionsStyles,
  };

  it('should be able to render select and props', () => {
    const { container, getByLabelText } = render(<Select {...props} />);

    expect(getByLabelText(props.label)).toBeTruthy();
    expect(container.querySelector('small')).toBeFalsy();
    expect(container.querySelectorAll('option').length).toBe(
      optionsStyles.length,
    );
  });

  it('should be able to render error', () => {
    mockedError.mockImplementation(() => 'Invalid input');

    const { getByText } = render(<Select {...props} />);

    expect(getByText('Invalid input')).toBeTruthy();
  });
});
