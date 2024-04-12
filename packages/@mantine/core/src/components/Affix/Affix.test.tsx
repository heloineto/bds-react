import { tests } from '@mantine-tests/core';
import { Affix, AffixProps, AffixStylesNames } from './Affix';

const defaultProps: AffixProps = {
  withinPortal: false,
};

describe('@bds-react/core/Affix', () => {
  tests.itSupportsSystemProps<AffixProps, AffixStylesNames>({
    component: Affix,
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
    displayName: '@bds-react/core/Affix',
    stylesApiSelectors: ['root'],
  });
});
