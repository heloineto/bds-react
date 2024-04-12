import React from 'react';
import { ActionIcon } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@bds-react/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}

export const loaderProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
