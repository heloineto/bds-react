import React from 'react';
import { Button, Drawer } from '@bds-react/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@bds-react/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
