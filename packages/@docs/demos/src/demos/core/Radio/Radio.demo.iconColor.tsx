import React from 'react';
import { Radio } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio } from '@bds-react/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`;

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}

export const iconColor: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
