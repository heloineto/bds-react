import { patchConsoleWarn, tests } from '@mantine-tests/core';
import { Sparkline, SparklineProps, SparklineStylesNames } from './Sparkline';

const defaultProps: SparklineProps = {
  data: [0, 1],
};

describe('@bds-react/core/Sparkline', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  tests.itSupportsSystemProps<SparklineProps, SparklineStylesNames>({
    component: Sparkline,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/Sparkline',
    stylesApiSelectors: ['root'],
  });
});
