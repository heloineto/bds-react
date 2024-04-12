import React from 'react';
import { ColorInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@bds-react/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      disallowInput
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
}

export const disallowInput: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
