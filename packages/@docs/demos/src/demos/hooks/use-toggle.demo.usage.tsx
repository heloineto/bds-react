import React from 'react';
import { Button } from '@bds-react/core';
import { upperFirst, useToggle } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@bds-react/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {upperFirst(value)}
    </Button>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
