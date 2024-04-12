import React from 'react';
import { tests } from '@mantine-tests/core';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '20vh' }} />,
};

describe('@bds-react/core/Collapse', () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/Collapse',
  });
});
