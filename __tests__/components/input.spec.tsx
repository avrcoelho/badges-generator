import React from 'react';
import { render } from '@testing-library/react';

import Input from '../../components/Input';

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

describe('Input', () => {
  const props = {
    label: 'Label',
    name: 'player',
  };

  it('should be able to render input and props', () => {
    const { container, getByLabelText } = render(<Input {...props} />);

    expect(getByLabelText(props.label)).toBeTruthy();
    expect(container.querySelector('small')).toBeFalsy();
  });

  it('should be able to render error', () => {
    mockedError.mockImplementation(() => 'Invalid input');

    const { getByText } = render(<Input {...props} />);

    expect(getByText('Invalid input')).toBeTruthy();
  });
});
