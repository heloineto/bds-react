import React from 'react';
import { tests } from '@mantine-tests/core';
import { Grid, GridProps, GridStylesNames } from './Grid';
import { GridCol } from './GridCol/GridCol';

const defaultProps: GridProps = {
  children: <Grid.Col span={12}>test</Grid.Col>,
};

describe('@bds-react/core/Grid', () => {
  tests.itSupportsSystemProps<GridProps, GridStylesNames>({
    component: Grid,
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
    displayName: '@bds-react/core/Grid',
    stylesApiSelectors: ['root', 'inner', 'col'],
  });

  it('exposes Grid.Col component', () => {
    expect(Grid.Col).toBe(GridCol);
  });
});
