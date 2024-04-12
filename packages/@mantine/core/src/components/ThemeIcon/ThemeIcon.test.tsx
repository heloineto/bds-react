import { tests } from '@mantine-tests/core';
import { ThemeIcon, ThemeIconProps, ThemeIconStylesNames } from './ThemeIcon';

const defaultProps: ThemeIconProps = {};

describe('@bds-react/core/ThemeIcon', () => {
  tests.itSupportsSystemProps<ThemeIconProps, ThemeIconStylesNames>({
    component: ThemeIcon,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/ThemeIcon',
    stylesApiSelectors: ['root'],
  });
});
