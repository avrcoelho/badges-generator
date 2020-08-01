import { FC } from "react";

import { Container } from "./styles";

const Footer: FC = () => (
  <Container>
    <div>
      <span>developed by</span>
      <a href="https://andrecoelho.dev" target="_blank">
        <img
          src="/assets/images/andrecoelho.png"
          width={150}
          alt="andrecoelho.dev"
        />
      </a>
    </div>
    <div>
      <span>
        Powered by{" "}
        <a href="https://shields.io/" target="_blank">
          Shields IO
        </a>
      </span>
    </div>
  </Container>
);

export default Footer;
