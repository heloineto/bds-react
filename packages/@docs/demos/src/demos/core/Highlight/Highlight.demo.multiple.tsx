import React from 'react';
import { Highlight } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Highlight } from '@bds-react/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
