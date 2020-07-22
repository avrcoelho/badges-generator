import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask, { Props as InputProps } from "react-input-mask";

import { Container } from "./styles";

interface Props extends InputProps {
  name: string;
  label?: string;
}

const InputMask: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <label>{label}</label>
      <ReactInputMask
        type="tel"
        ref={inputRef}
        defaultValue={defaultValue}
        maskChar={null}
        {...rest}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};

export default InputMask;
