import React from 'react';
import { Anchor } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Anchor } from '@bds-react/core';

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}

export const textProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
