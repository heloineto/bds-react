import React from 'react';
import { rem, TextInput } from '@bds-react/core';
import { IconAt } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';
import { TextInputStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { TextInput, rem } from '@bds-react/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: TextInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
