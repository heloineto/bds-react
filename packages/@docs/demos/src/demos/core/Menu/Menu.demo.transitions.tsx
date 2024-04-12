import React from 'react';
import { Menu } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@bds-react/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      <DemoMenuItems />
    </Menu>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
