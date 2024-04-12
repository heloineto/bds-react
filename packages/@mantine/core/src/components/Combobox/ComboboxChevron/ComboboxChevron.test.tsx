import { tests } from '@mantine-tests/core';
import {
  ComboboxChevron,
  ComboboxChevronProps,
  ComboboxChevronStylesNames,
} from './ComboboxChevron';

const defaultProps: ComboboxChevronProps = {};

describe('@bds-react/core/ComboboxChevron', () => {
  tests.itSupportsSystemProps<ComboboxChevronProps, ComboboxChevronStylesNames>({
    component: ComboboxChevron,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: SVGSVGElement,
    displayName: '@bds-react/core/ComboboxChevron',
    stylesApiSelectors: ['chevron'],
  });
});
