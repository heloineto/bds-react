import React from 'react';
import { Radio, Tooltip } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Tooltip, Radio } from '@bds-react/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}

export const tooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
