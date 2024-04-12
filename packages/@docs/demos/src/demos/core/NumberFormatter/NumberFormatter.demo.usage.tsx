import React from 'react';
import { NumberFormatter } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberFormatter } from '@bds-react/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`;

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
