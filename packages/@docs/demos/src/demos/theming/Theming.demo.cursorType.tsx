import React from 'react';
import { Checkbox, createTheme, MantineThemeProvider } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MantineProvider, createTheme, Checkbox } from '@bds-react/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`;

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineThemeProvider theme={theme}>
        <Checkbox
          label="Pointer cursor"
          mt="md"
          styles={{ input: { cursor: 'pointer' }, label: { cursor: 'pointer' } }}
        />
      </MantineThemeProvider>
    </>
  );
}

export const cursorType: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
