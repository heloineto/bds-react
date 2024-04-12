import type { FloatingIndicatorFactory } from '@bds-react/core';
import type { StylesApiData } from '../types';

export const FloatingIndicatorStylesApi: StylesApiData<FloatingIndicatorFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--transition-duration': 'Controls indicator transition duration',
    },
  },
};
