import React from 'react';
import { NumberInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@bds-react/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`;

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
