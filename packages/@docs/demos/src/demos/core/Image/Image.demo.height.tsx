import React from 'react';
import { Image } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Image } from '@bds-react/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}

export const height: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
