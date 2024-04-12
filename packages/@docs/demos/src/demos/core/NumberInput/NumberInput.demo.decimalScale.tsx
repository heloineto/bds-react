import React from 'react';
import { NumberInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@bds-react/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}

export const decimalScale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
