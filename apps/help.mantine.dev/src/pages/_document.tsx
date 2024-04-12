import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@bds-react/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
