import React from 'react';
import { Input } from '@bds-react/core';
import { IMaskInput } from 'react-imask';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Input } from '@bds-react/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`;

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}

export const mask: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
