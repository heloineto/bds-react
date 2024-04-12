import React, { useState } from 'react';
import { Button, Tooltip } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Tooltip, Button } from '@bds-react/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>Toggle color scheme</Button>
    </Tooltip>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  centered: true,
  code,
  component: Demo,
};
