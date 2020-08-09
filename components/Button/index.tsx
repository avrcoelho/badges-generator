import React, { FC, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
