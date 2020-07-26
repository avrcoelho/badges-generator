import { FC, useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";
import { FiHelpCircle } from "react-icons/fi";

import { Container, Info } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  info?: string;
  widthTootip?: number;
}

const Input: FC<Props> = ({ name, label, widthTootip, info, ...rest }) => {
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
      <label>
        {label}
        {info && (
          <Info title={info} width={widthTootip}>
            <FiHelpCircle size={18} color="#666" />
          </Info>
        )}
      </label>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <small>{error}</small>}
    </Container>
  );
};

export default Input;
