import React from 'react';
import { Chip, Tooltip } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Tooltip, Chip } from '@bds-react/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}

export const tooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
