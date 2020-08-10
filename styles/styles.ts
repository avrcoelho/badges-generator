import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex: 1;
  min-height: calc(100vh - 139.88px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content404 = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
    color: #5b0095;
  }

  p {
    color: #666;
    font-size: 14px;
  }

  a {
    color: #5b0095;
    font-size: 14px;
    margin-top: 30px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: #5b0095;
  margin-top: 50px;
  text-align: center;
`;

export const SubTitle = styled.h1`
  color: #666;
  font-size: 18px;
  margin-top: 8px;
  text-align: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  padding: 0 20px;

  form {
    flex: 1;
  }
`;
