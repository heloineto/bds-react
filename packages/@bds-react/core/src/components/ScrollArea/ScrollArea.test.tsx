import { tests } from '@mantine-tests/core';
import { ScrollArea, ScrollAreaProps, ScrollAreaStylesNames } from './ScrollArea';

const defaultProps: ScrollAreaProps = {
  type: 'always',
  children: 'test',
};

describe('@bds-react/core/ScrollArea', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
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
    displayName: '@bds-react/core/ScrollArea',
    stylesApiSelectors: ['root', 'viewport'],
  });
});

describe('@bds-react/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/ScrollAreaAutosize',
  });
});
