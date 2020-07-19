import { FC } from "react";
import { Html } from "next/document";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: FC) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Html lang="en">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
