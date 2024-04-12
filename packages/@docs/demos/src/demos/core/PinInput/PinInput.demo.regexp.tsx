import React from 'react';
import { PinInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PinInput } from '@bds-react/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
`;

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}

export const regexp: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
