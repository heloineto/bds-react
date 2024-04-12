import React from 'react';
import { Code } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code } from '@bds-react/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@bds-react/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@bds-react/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
