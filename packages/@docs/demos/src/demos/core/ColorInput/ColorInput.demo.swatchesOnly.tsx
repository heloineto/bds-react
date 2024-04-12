import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput, DEFAULT_THEME } from '@bds-react/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
