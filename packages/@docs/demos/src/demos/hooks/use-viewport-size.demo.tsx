import React from 'react';
import { Text } from '@bds-react/core';
import { useViewportSize } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text ta="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
