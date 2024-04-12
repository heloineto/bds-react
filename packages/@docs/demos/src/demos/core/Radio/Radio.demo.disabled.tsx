import React from 'react';
import { Group, Radio } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Group } from '@bds-react/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
