import React from 'react';
import { render } from '@testing-library/react';

import InputMask from '../../components/InputMask';

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

describe('InputMask', () => {
  const props = {
    label: 'Label',
    name: 'player',
    mask: '99',
    info: undefined,
  };

  it('should be able to render input mask and props', () => {
    const { container, getByLabelText } = render(<InputMask {...props} />);

    expect(getByLabelText(props.label)).toBeTruthy();
    expect(container.querySelector('small')).toBeFalsy();
  });

  it('should be able to render input mask and prop info', () => {
    props.info = 'information';

    const { getByText } = render(<InputMask {...props} />);

    expect(getByText(props.info)).toBeTruthy();
  });

  it('should be able to render error', () => {
    mockedError.mockImplementation(() => 'Invalid input');

    const { getByText } = render(<InputMask {...props} />);

    expect(getByText('Invalid input')).toBeTruthy();
  });
});
