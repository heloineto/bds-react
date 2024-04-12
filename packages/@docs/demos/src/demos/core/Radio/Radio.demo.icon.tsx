import React from 'react';
import { CheckIcon, Radio } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, CheckIcon } from '@bds-react/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`;

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
