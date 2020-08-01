import { FC } from "react";
import { Element as ScrollElement } from "react-scroll";

import { Container, Code } from "./styles";

interface Props {
  markdown: string;
  html: string;
}

const Results: FC<Props> = ({ markdown, html }) => (
  <Container>
    <ScrollElement name="results" className="results">
      <div className="img-result" dangerouslySetInnerHTML={{ __html: html }} />
      <Code>
        <h3>Marldown</h3>
        <pre>
          <code className="code-block">
            <div>{markdown}</div>
          </code>
        </pre>
      </Code>
      <Code>
        <h3>HTML</h3>
        <pre>
          <code className="code-block">
            <div>{html}</div>
          </code>
        </pre>
      </Code>
    </ScrollElement>
  </Container>
);

export default Results;
