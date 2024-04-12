import React from 'react';
import { Avatar } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { gradientControls } from '../../../shared';

const code = (props: any) => `
import { Avatar } from '@bds-react/core';

function Demo() {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      GR
    </Avatar>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }}
    >
      GR
    </Avatar>
  );
}

export const gradient: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls,
};
