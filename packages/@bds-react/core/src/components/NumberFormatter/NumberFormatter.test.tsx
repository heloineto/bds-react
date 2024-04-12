import { tests } from '@mantine-tests/core';
import { NumberFormatter } from './NumberFormatter';

describe('@bds-react/core/NumberFormatter', () => {
  tests.itHasExtend({ component: NumberFormatter });

  it('has correct displayName', () => {
    expect(NumberFormatter.displayName).toEqual('@bds-react/core/NumberFormatter');
  });
});
