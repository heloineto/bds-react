import { tests } from '@mantine-tests/core';
import { SimpleGrid, SimpleGridProps, SimpleGridStylesNames } from './SimpleGrid';

const defaultProps: SimpleGridProps = {};

describe('@bds-react/core/SimpleGrid', () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
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
    displayName: '@bds-react/core/SimpleGrid',
    stylesApiSelectors: ['root'],
  });
});
