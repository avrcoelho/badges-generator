import React, { FC } from 'react';
import Container from 'next/head';

interface Props {
  title: string;
}

const Head: FC<Props> = ({ title }) => {
  return (
    <Container>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="keywords"
        content="badge, badges, generator, generate, custom, readme, reademe.md, github, gitlab, bitbucket, shields, shields.io"
      />
      <meta
        name="description"
        content="Generate in HTML and Markdown custom badges for README.md files for GitHub, GitLab, Bitbucket and etc."
      />
      <meta property="og:description" content="Generate in HTML and Markdown custom badges for README.md files for GitHub, GitLab, Bitbucket and etc." />
      <meta name="twitter:description" content="Generate in HTML and Markdown custom badges for README.md files for GitHub, GitLab, Bitbucket and etc." />
      <meta property="og:title" content="Badges Generator for README.md" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="andrecoelho.dev" />
      <meta name="twitter:title" content="Badges Generator for README.md" />
      <meta property="og:site_name" content="Badges Generator for README.md" />
      <meta property="og:url" content="https://badgesgenerator.com" />
      <meta
        property="og:image"
        content="https://badgesgenerator.com/assets/images/andrecoelho-og.png"
      />

      <title>{title}</title>

      <link rel="icon" href="/assets/images/favicon-32x32.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Container>
  );
};

export default Head;
