import React from 'react';
import { Button, Modal } from '@bds-react/core';
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@bds-react/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export const closeIcon: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
