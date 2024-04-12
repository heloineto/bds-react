import React from 'react';
import { ActionIcon, rem } from '@bds-react/core';
import { IconHeart } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, rem } from '@bds-react/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}

export const size: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
