import React from 'react';
import { Input } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`;

function Wrapper(props: any) {
  return <Input placeholder="Input component" {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    { type: 'boolean', prop: 'disabled', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'error', initialValue: false, libraryValue: false },
    { type: 'boolean', prop: 'success', initialValue: false, libraryValue: false },
  ],
};
