import type { ContainerFactory } from '@bds-react/core';
import type { StylesApiData } from '../types';

export const ContainerStylesApi: StylesApiData<ContainerFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--container-size': 'Controls container `max-width`',
    },
  },
};
