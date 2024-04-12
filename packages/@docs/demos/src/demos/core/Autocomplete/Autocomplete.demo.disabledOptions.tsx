import React from 'react';
import { Autocomplete } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Autocomplete } from '@bds-react/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
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
