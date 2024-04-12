import React from 'react';
import { TagsInput } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TagsInput } from '@bds-react/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`;

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
