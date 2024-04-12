import React from 'react';
import { Select } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { Select } from '@bds-react/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <Select
      {...props}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
