import React from 'react';
import { Container } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Container } from '@bds-react/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
`;

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}

export const fluid: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
