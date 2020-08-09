/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC } from 'react';
import { Html } from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

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

      const gooleAnalitycs = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-175041536-1');`;

      return {
        ...initialProps,
        styles: (
          <Html lang="en">
            <body>
              {initialProps.styles}
              {sheet.getStyleElement()}

              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-175041536-1"
              />
              <script dangerouslySetInnerHTML={{ __html: gooleAnalitycs }} />
            </body>
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
