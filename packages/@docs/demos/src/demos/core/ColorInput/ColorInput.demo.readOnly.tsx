import React from 'react';
import { ColorInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@bds-react/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`;

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
