import React from 'react';
import { Group } from '@bds-react/core';
import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group } from '@bds-react/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}

export const firstDayOfWeek: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
