import styled from "styled-components";

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

export const Code = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 4px;

  & + div {
    margin-top: 32px;
  }

  h3 {
    color: #5b0095;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

export const ResultContainer = styled.section`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 100px;

  pre {
    overflow: auto;
    display: block;
    padding: 0;
    margin: 0;

    .code-block {
      border-radius: 0;
      margin-bottom: 0;
      float: left;
      min-width: 100%;
    }

    code {
      color: #333;
      background-color: #fafafa;
      padding: 1rem;
      display: inline;
      font-size: 100%;
      line-height: inherit;
      overflow: visible;
      white-space: pre;
      word-break: normal;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  color: #999;
  font-size: 12px;
  background-color: #f1f1f1;
`;
