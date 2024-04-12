import { tests } from '@mantine-tests/core';
import { VisuallyHidden, VisuallyHiddenProps, VisuallyHiddenStylesNames } from './VisuallyHidden';

const defaultProps: VisuallyHiddenProps = {};

describe('@bds-react/core/VisuallyHidden', () => {
  tests.itSupportsSystemProps<VisuallyHiddenProps, VisuallyHiddenStylesNames>({
    component: VisuallyHidden,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLSpanElement,
    displayName: '@bds-react/core/VisuallyHidden',
    stylesApiSelectors: ['root'],
  });
});
