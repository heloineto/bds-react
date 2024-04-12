import React from 'react';
import { tests } from '@mantine-tests/core';
import { Center, CenterProps, CenterStylesNames } from './Center';

const defaultProps: CenterProps = {
  children: <div />,
};

describe('@bds-react/core/Center', () => {
  tests.itSupportsSystemProps<CenterProps, CenterStylesNames>({
    component: Center,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/Center',
    stylesApiSelectors: ['root'],
  });
});
