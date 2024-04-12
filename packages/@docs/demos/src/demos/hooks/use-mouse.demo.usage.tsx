import React from 'react';
import { Code, Text } from '@bds-react/core';
import { useMouse } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Code } from '@bds-react/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
