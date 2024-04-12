import React from 'react';
import { Code } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code } from '@bds-react/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
