import { FC, useCallback, useState, useEffect } from "react";
import { Element as ScrollElement } from "react-scroll";

import { Container, Code, ButtonCopy } from "./styles";

interface Props {
  markdown: string;
  html: string;
}

interface CopiedState {
  type: string;
  copied: boolean;
}

const Results: FC<Props> = ({ markdown, html }) => {
  const [copiedStatus, setCopiedStatus] = useState<CopiedState>({
    type: "",
    copied: false,
  });

  useEffect(() => {
    if (copiedStatus.type === "") {
      return;
    }

    const timeout = setTimeout(() => {
      setCopiedStatus({
        type: "",
        copied: false,
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copiedStatus]);

  const handleCopy = useCallback((type: string) => {
    navigator.clipboard.writeText(type === "html" ? html : markdown);

    setCopiedStatus({
      type: type,
      copied: true,
    });
  }, []);

  return (
    <Container>
      <ScrollElement name="results" className="results">
        <div
          className="img-result"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Code>
          <h3>Marldown</h3>
          <div className="code-block">
            <pre>
              <ButtonCopy type="button" onClick={() => handleCopy("markdown")}>
                {copiedStatus.copied && copiedStatus.type === "markdown"
                  ? "Copied"
                  : "Copy"}
              </ButtonCopy>
              <code className="code">
                <div>{markdown}</div>
              </code>
            </pre>
          </div>
        </Code>
        <Code>
          <h3>HTML</h3>
          <div className="code-block">
            <pre>
              <ButtonCopy type="button" onClick={() => handleCopy("html")}>
                {copiedStatus.copied && copiedStatus.type === "html"
                  ? "Copied"
                  : "Copy"}
              </ButtonCopy>
              <code className="code">
                <div>{html}</div>
              </code>
            </pre>
          </div>
        </Code>
      </ScrollElement>
    </Container>
  );
};

export default Results;
