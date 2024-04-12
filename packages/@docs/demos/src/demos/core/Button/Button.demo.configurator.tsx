import React from 'react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { buttonVariantsControl } from '../../../shared';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`;

function Wrapper(props: any) {
  return <Button {...props}>Button</Button>;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    buttonVariantsControl,
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      type: 'select',
      prop: 'size',
      data: ['standard', 'short'],
      initialValue: 'standard',
      libraryValue: 'standard',
    },
    { type: 'boolean', prop: 'disabled', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'loading', initialValue: false, libraryValue: false },
  ],
};
