import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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