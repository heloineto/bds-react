import { createContextContainer, tests } from '@mantine-tests/core';
import { Popover } from '../Popover';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, {
  opened: true,
  withArrow: true,
  withinPortal: false,
});

describe('@bds-react/core/PopoverDropdown', () => {
  tests.itSupportsSystemProps<PopoverDropdownProps>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/PopoverDropdown',
    stylesApiName: 'Popover',
    stylesApiSelectors: ['dropdown', 'arrow'],
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: PopoverDropdown,
    props: defaultProps,
    error: 'Popover component was not found in the tree',
  });
});
