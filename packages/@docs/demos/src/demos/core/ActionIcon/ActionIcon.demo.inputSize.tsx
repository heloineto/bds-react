import React from 'react';
import { ActionIcon, Group, TextInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Group, TextInput } from '@bds-react/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}

export const inputSize: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
