import React from 'react';
import { FileInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileInput } from '@bds-react/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`;

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}

export const clearable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
