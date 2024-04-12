import React from 'react';
import { Pill, PillsInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { PillsInput, Pill } from '@bds-react/core';


function Demo() {
  return (
    <PillsInput
      {{props}}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`;

function Wrapper(props: any) {
  return (
    <PillsInput {...props}>
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputControls,
};
