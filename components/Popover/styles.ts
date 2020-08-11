import styled from 'styled-components';

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  span {
    width: ${({ width }) => width}px;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    visibility: hidden;
    text-transform: none;
    line-height: 17px;

    a {
      color: #fff;
      font-weight: bold;
    }

    @media (max-width: 750px) {
      transform: unset;
      right: 0;
      left: unset;
    }

    &::before {
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      content: '';

      @media (max-width: 750px) {
        right: 0;
        left: unset;
      }
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
