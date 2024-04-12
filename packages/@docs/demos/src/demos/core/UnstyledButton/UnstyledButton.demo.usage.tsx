import React from 'react';
import { UnstyledButton } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { UnstyledButton } from '@bds-react/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
`;

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
