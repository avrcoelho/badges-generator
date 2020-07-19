import { FC, useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <label>{label}</label>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <small>{error}</small>}
    </Container>
  );
};

export default Input;
