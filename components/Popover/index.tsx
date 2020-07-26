import React from "react";

import { Container } from "./styles";

interface PopoverProps {
  title: string;
  className?: string;
  width?: number;
}

const Popover: React.FC<PopoverProps> = ({
  title,
  width = 300,
  className,
  children,
}) => {
  return (
    <Container className={className} width={width}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Popover;
