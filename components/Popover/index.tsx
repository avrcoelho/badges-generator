import React, { ReactNode, MouseEvent, useCallback } from 'react';

import { Container } from './styles';

interface PopoverProps {
  title: string | ReactNode;
  className?: string;
  width?: number;
}

const Popover: React.FC<PopoverProps> = ({
  title,
  width = 300,
  className,
  children,
}) => {
  const handleDontFocusInput = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Container
      className={className}
      width={width}
      onClick={handleDontFocusInput}
    >
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Popover;
