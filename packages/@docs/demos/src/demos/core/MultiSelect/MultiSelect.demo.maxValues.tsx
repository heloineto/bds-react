import React from 'react';
import { MultiSelect } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MultiSelect } from '@bds-react/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}

export const maxValues: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
