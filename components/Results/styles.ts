import styled from 'styled-components';

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
`;

export const Code = styled.div`
  width: 100%;
  border-radius: 4px;
  position: relative;

  & + div {
    margin-top: 32px;
  }

  .code-block {
    position: relative;

    &:hover pre button {
      visibility: visible;
      opacity: 1;
    }
  }

  h3 {
    color: #5b0095;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  pre {
    overflow: auto;
    display: block;
    padding: 0;
    margin: 0;

    .code {
      border-radius: 0;
      margin-bottom: 0;
      float: left;
      min-width: 100%;
      position: relative;
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
      max-width: auto;
    }
  }
`;

export const ButtonCopy = styled.button`
  background: #011627;
  border: 1px solid #d6deeb;
  border-radius: 0.4rem;
  color: #d6deeb;
  cursor: pointer;
  line-height: 12px;
  opacity: 0;
  outline: none;
  padding: 4px 8px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  visibility: hidden;
  -webkit-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
    bottom 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
    bottom 0.2s ease-in-out;
  z-index: 2;
  font-size: 14px;
`;
