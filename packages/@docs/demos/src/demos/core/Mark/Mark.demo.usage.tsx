import React from 'react';
import { Mark, MarkProps, Text } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const code = `
import { Text, Mark } from '@bds-react/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark{{props}}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [{ prop: 'color', type: 'color', initialValue: 'yellow', libraryValue: 'yellow' }],
};
