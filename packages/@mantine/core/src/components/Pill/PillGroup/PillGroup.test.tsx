import { tests } from '@mantine-tests/core';
import { PillGroup, PillGroupProps, PillGroupStylesNames } from './PillGroup';

const defaultProps: PillGroupProps = {};

describe('@bds-react/core/PillGroup', () => {
  tests.itSupportsSystemProps<PillGroupProps, PillGroupStylesNames>({
    component: PillGroup,
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
    displayName: '@bds-react/core/PillGroup',
    stylesApiSelectors: ['group'],
  });
});
