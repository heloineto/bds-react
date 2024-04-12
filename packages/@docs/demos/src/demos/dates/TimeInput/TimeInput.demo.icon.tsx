import React from 'react';
import { rem } from '@bds-react/core';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { rem } from '@bds-react/core';

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}
`;

function Demo() {
  return (
    <TimeInput
      leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
