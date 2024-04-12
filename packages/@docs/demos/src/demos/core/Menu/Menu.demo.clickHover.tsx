import React from 'react';
import { Menu } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@bds-react/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      <DemoMenuItems />
    </Menu>
  );
}

export const clickHover: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
