import styled from "styled-components";

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.74;
  letter-spacing: 0.7px;

  & + div {
    margin-top: 20px;
  }

  label {
    font-size: 14px;
    text-transform: uppercase;
    color: #666;
  }

  input {
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 2px solid
      ${({ hasError }) => (hasError ? "#ed0000" : "#999")};

    &::placeholder {
      color: #ccc;
    }
  }

  small {
    font-size: 12px;
    color: #ed0000;
    line-height: 1.75;
    letter-spacing: normal;
  }
`;
