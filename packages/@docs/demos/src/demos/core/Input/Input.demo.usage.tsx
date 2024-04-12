import React from 'react';
import { Input } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { inputOnlyControls } from '../../../shared';

const code = `
import { Input } from '@bds-react/core';

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
  controls: inputOnlyControls,
};
