import React, { FC } from 'react';

import { Container } from './styles';

const Footer: FC = () => (
  <Container>
    <div>
      <span>
        Powered by{' '}
        <a href="https://shields.io/" target="_blank" rel="noreferrer">
          Shields IO
        </a>
      </span>
    </div>
    <div>
      <span>developed by</span>
      <a href="https://andrecoelho.dev" target="_blank" rel="noreferrer">
        <img
          src="/assets/images/andrecoelho.png"
          width={150}
          alt="andrecoelho.dev"
        />
      </a>
    </div>
  </Container>
);

export default Footer;
