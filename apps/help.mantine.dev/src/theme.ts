import { createTheme, virtualColor } from '@bds-react/core';

export const appTheme = createTheme({
  colors: {
    primary: virtualColor({ name: 'primary', light: 'blue', dark: 'red' }),
  },
  headings: {
    fontFamily: 'Greycliff CF, var(--mantine-font-family)',
    sizes: {
      h1: {
        fontWeight: '900',
      },
    },
  },
});

export { appTheme as theme };
