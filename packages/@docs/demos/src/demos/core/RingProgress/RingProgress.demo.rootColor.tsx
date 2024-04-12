import React from 'react';
import { RingProgress } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RingProgress } from '@bds-react/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}

export const rootColor: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
