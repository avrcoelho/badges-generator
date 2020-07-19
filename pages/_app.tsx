import { FC } from "react";

import GlobalStyles from "../styles/Global";

interface Props {
  Component: FC;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
