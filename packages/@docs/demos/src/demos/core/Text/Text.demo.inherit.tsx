import React from 'react';
import { Text, Title } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Title } from '@bds-react/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text span c="blue" inherit>
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

export const inherit: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
