import { FC } from "react";

import { Container } from "./styles";

const Footer: FC = () => (
  <Container>
    <span>developed by</span>
    <a href="https://andrecoelho.dev" target="_blank">
      <img
        src="/assets/images/andrecoelho.png"
        width={150}
        alt="andrecoelho.dev"
      />
    </a>
  </Container>
);

export default Footer;
