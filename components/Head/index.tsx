import { FC } from "react";
import Container from "next/head";

interface Props {
  title: string;
}

const Head: FC<Props> = ({ title }) => {
  return (
    <Container>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Container>
  );
};

export default Head;
