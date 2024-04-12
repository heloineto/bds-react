import React from 'react';
import { SegmentedControl } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SegmentedControl } from '@bds-react/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
