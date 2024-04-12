import React from 'react';
import { ElementProps, Text, TextProps } from '@bds-react/core';
import cx from 'clsx';
import classes from './TableInlineCode.module.css';

interface TableInlineCodeProps extends TextProps, ElementProps<'span', 'color'> {}

export function TableInlineCode({ className, ...others }: TableInlineCodeProps) {
  return <Text component="span" className={cx(classes.code, className)} {...others} />;
}
