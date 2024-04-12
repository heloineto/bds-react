import React from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@bds-react/core';
import { useSpotlightContext } from './Spotlight.context';
import classes from './Spotlight.module.css';

export type SpotlightFooterStylesNames = 'footer';

export interface SpotlightFooterProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightFooterFactory>,
    ElementProps<'div'> {}

export type SpotlightFooterFactory = Factory<{
  props: SpotlightFooterProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightFooterStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightFooterProps> = {};

export const SpotlightFooter = factory<SpotlightFooterFactory>((props, ref) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'SpotlightFooter',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();
  return (
    <Box
      ref={ref}
      {...ctx.getStyles('footer', { className, classNames, style, styles })}
      {...others}
    />
  );
});

SpotlightFooter.classes = classes;
SpotlightFooter.displayName = '@mantine/spotlight/SpotlightFooter';
