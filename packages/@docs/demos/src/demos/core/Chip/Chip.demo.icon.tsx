import React from 'react';
import { Chip, rem } from '@bds-react/core';
import { IconX } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Chip, rem } from '@bds-react/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
