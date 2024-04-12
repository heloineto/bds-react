import React from 'react';
import { MultiSelect } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect } from '@bds-react/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
