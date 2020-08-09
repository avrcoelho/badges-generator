import React, { FC, useEffect, useRef, SelectHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Option } from '../../constants/optionStyles';

import { Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Option[];
}

const Select: FC<Props> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <label htmlFor={name}>{label}</label>
      <select id={name} ref={selectRef} defaultValue={defaultValue} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      {error && <small>{error}</small>}
    </Container>
  );
};

export default Select;
