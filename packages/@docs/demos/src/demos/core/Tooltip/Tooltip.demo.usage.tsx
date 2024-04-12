import React from 'react';
import { Button, Tooltip } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Tooltip, Button } from '@bds-react/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
