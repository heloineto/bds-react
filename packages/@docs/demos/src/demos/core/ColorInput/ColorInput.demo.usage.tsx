import React from 'react';
import { ColorInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { ColorInput } from '@bds-react/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <ColorInput {...props} placeholder="Input placeholder" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
