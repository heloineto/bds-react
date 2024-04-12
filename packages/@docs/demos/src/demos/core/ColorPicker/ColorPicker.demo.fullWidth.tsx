import React from 'react';
import { ColorPicker } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorPicker } from '@bds-react/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`;

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
