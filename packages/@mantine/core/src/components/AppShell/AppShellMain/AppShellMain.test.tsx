import { createContextContainer, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import { AppShellMain, AppShellMainProps, AppShellMainStylesNames } from './AppShellMain';

const TestContainer = createContextContainer(AppShellMain, AppShell, {});

const defaultProps: AppShellMainProps = {};

describe('@bds-react/core/AppShellMain', () => {
  tests.itSupportsSystemProps<AppShellMainProps, AppShellMainStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@bds-react/core/AppShellMain',
    stylesApiSelectors: ['main'],
    selector: '.mantine-AppShell-main',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellMain,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });
});
