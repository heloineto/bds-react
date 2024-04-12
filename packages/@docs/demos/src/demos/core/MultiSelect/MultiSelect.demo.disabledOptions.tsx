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
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}

export const disabledOptions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
