import React from 'react';
import { PasswordInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PasswordInput } from '@bds-react/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`;

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
