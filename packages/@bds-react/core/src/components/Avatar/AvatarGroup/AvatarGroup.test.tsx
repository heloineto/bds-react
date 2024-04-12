import { tests } from '@mantine-tests/core';
import { AvatarGroup, AvatarGroupProps, AvatarGroupStylesNames } from './AvatarGroup';

const defaultProps: AvatarGroupProps = {};

describe('@bds-react/core/AvatarGroup', () => {
  tests.itSupportsSystemProps<AvatarGroupProps, AvatarGroupStylesNames>({
    component: AvatarGroup,
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
    displayName: '@bds-react/core/AvatarGroup',
    stylesApiSelectors: ['group'],
  });
});
