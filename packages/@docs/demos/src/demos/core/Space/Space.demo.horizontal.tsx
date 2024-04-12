import React from 'react';
import { Space, Text } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const code = `
import { Text, Space } from '@bds-react/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
`;

export const horizontal: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ prop: 'h', type: 'size', initialValue: 'md', libraryValue: '__' }],
};
