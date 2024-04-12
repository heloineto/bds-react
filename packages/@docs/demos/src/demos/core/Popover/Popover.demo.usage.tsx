import React from 'react';
import { Button, Popover, Text } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Popover, Text, Button } from '@bds-react/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
