import { tests } from '@mantine-tests/core';
import { Title, TitleProps, TitleStylesNames } from './Title';

const defaultProps: TitleProps = {};

describe('@bds-react/core/Title', () => {
  tests.itSupportsSystemProps<TitleProps, TitleStylesNames>({
    component: Title,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLHeadingElement,
    displayName: '@bds-react/core/Title',
    stylesApiSelectors: ['root'],
  });
});
