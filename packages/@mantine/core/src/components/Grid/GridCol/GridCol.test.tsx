import { createContextContainer, tests } from '@mantine-tests/core';
import { Grid } from '../Grid';
import { GridCol, GridColProps, GridColStylesNames } from './GridCol';

const TestContainer = createContextContainer(GridCol, Grid, {});

const defaultProps: GridColProps = {};

describe('@bds-react/core/GridCol', () => {
  tests.itSupportsSystemProps<GridColProps, GridColStylesNames>({
    component: TestContainer,
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
    displayName: '@bds-react/core/GridCol',
    stylesApiSelectors: ['col'],
    stylesApiName: 'Grid',
    selector: '.mantine-Grid-col',
    compound: true,
    providerStylesApi: false,
  });
});
