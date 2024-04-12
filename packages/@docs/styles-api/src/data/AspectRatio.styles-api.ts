import type { AspectRatioFactory } from '@bds-react/core';
import type { StylesApiData } from '../types';

export const AspectRatioStylesApi: StylesApiData<AspectRatioFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--ar-ratio': 'Aspect ratio',
    },
  },
};
