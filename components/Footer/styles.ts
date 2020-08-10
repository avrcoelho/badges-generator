import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 12px;
  background-color: #f1f1f1;
  margin-top: 60px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: #5b0095;

      &:hover {
        text-decoration: underline;
      }
    }

    & + div {
      margin-top: 12px;
    }
  }
`;
