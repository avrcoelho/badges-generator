import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 700px;
  padding: 0 20px;
  margin: auto;
  margin-top: 50px;

  .results {
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-result {
      margin-bottom: 20px;
    }
  }

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
