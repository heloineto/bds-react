import type { NativeSelectFactory } from '@bds-react/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const NativeSelectStylesApi: StylesApiData<NativeSelectFactory> = {
  selectors: {
    ...InputWrapperStylesApi.selectors,
    ...InputStylesApi.selectors,
  },

  vars: {},
};
