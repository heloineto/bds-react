import React from 'react';
import Head from 'next/head';
import { DEFAULT_THEME } from '@bds-react/core';
import { greycliffCF } from './GreycliffCF/GreycliffCF';

export function FontsStyle() {
  return (
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{ --docs-font-primary: ${greycliffCF.style.fontFamily}, ${DEFAULT_THEME.fontFamily}; }`,
        }}
      />
    </Head>
  );
}
