import React from 'react';
import { render, screen, tests } from '@mantine-tests/core';
import { Indicator, IndicatorProps, IndicatorStylesNames } from './Indicator';

const defaultProps: IndicatorProps = {};

describe('@bds-react/core/Indicator', () => {
  tests.itSupportsSystemProps<IndicatorProps, IndicatorStylesNames>({
    component: Indicator,
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
    displayName: '@bds-react/core/Indicator',
    stylesApiSelectors: ['root', 'indicator'],
  });

  it('renders given label', () => {
    render(<Indicator {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render indicator if component is disabled', () => {
    render(<Indicator {...defaultProps} label="test-label" disabled />);
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
  });
});
