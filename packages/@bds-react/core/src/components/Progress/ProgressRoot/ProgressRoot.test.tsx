import { tests } from '@mantine-tests/core';
import { ProgressRoot, ProgressRootProps, ProgressRootStylesNames } from './ProgressRoot';

const defaultProps: ProgressRootProps = {};

describe('@bds-react/core/ProgressRoot', () => {
  tests.itSupportsSystemProps<ProgressRootProps, ProgressRootStylesNames>({
    component: ProgressRoot,
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
    displayName: '@bds-react/core/ProgressRoot',
    stylesApiSelectors: ['root'],
    stylesApiName: 'Progress',
  });
});
