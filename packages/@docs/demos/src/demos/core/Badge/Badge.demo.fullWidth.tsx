import React from 'react';
import { Badge } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge } from '@bds-react/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
