import React from 'react';
import Link from 'next/link';
import { FOCUS_CLASS_NAMES, VisuallyHidden } from '@bds-react/core';
import cx from 'clsx';
import { MantineLogo, MantineLogoProps } from '@mantinex/mantine-logo';
import classes from './Logo.module.css';

export function Logo(props: MantineLogoProps) {
  return (
    <Link href="/" className={cx(classes.logo, FOCUS_CLASS_NAMES.auto)} aria-label="Mantine">
      <VisuallyHidden>
        Welcome to Mantine, React components library that you always wished for
      </VisuallyHidden>
      <MantineLogo size={30} {...props} />
    </Link>
  );
}
