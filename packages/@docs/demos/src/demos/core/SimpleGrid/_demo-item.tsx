import React from 'react';
import { Box, BoxProps, ElementProps, Text } from '@bds-react/core';
import cx from 'clsx';
import classes from './_item.module.css';

interface GridItemProps extends BoxProps, ElementProps<'div'> {}

export function GridItem({ className, children, ...others }: GridItemProps) {
  return (
    <Box className={cx(classes.item, className)} {...others}>
      <Text className={classes.label}>{children}</Text>
    </Box>
  );
}

export const defaultItems = Array(5)
  .fill(0)
  .map((_, index) => <GridItem key={index}>{index + 1}</GridItem>);
