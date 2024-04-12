import React from 'react';
import { ColorInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@bds-react/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`;

function Demo() {
  return (
    <ColorInput
      fixOnBlur={false}
      label="Value is not fixed on blur"
      placeholder="May contain invalid value"
    />
  );
}

export const fixOnBlur: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
