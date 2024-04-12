import React from 'react';
import { filterFalsyChildren } from './filter-falsy-children';

describe('@bds-react/core/utils/filter-falsy-children', () => {
  it('remove falsy children', () => {
    expect(filterFalsyChildren([undefined, null, false, '', <div key="1" />]).length).toBe(1);
  });
});
