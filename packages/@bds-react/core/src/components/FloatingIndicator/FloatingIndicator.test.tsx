import { tests } from '@mantine-tests/core';
import {
  FloatingIndicator,
  FloatingIndicatorProps,
  FloatingIndicatorStylesNames,
} from './FloatingIndicator';

const defaultProps: FloatingIndicatorProps = {
  target: document.createElement('div'),
  parent: document.createElement('div'),
  transitionDuration: 150,
  displayAfterTransitionEnd: false,
};

describe('@bds-react/core/FloatingIndicator', () => {
  tests.itSupportsSystemProps<FloatingIndicatorProps, FloatingIndicatorStylesNames>({
    component: FloatingIndicator,
    props: defaultProps,
    mod: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/FloatingIndicator',
    stylesApiSelectors: ['root'],
  });
});
