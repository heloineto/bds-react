import type { BoxProps, ElementProps } from '@bds-react/core';

export interface DevIconProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity'> {
  size?: number | string;
}
