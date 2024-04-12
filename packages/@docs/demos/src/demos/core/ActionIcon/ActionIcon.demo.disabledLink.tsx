import React from 'react';
import { ActionIcon } from '@bds-react/core';
import { IconExternalLink } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@bds-react/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}

export const disabledLink: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
