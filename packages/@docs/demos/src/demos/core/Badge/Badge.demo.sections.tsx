import React from 'react';
import { Badge, Group, rem } from '@bds-react/core';
import { IconAt } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Badge, Group, rem } from '@bds-react/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
`;

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
