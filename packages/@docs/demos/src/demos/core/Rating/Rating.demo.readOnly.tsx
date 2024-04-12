import React from 'react';
import { Rating } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@bds-react/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
