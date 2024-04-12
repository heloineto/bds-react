import React from 'react';
import { Box, rem } from '@bds-react/core';
import { IconProps } from './types';
import classes from './icons.module.css';

export function RedwoodIcon({ size = 28, ...others }: IconProps) {
  return (
    <Box
      __vars={{ '--icon-size': rem(size) }}
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 277"
      className={classes.icon}
      {...others}
    >
      <path
        fill="#FFF"
        d="M112.39 3.928C101.983 9.164 80.046 19.36 68.16 27.493c-11.885 8.134-10.407 15.711-15.61 20.948-5.203 5.237-20.814 18.329-31.22 26.184-10.407 7.855-7.806 28.803-10.407 36.658-2.602 7.855-7.806 26.184-10.407 34.04-2.602 7.855 5.203 18.329 10.407 28.802 5.203 10.474 18.211 39.277 23.415 49.75 5.203 10.474 20.813 5.237 33.822 15.71 13.009 10.475 31.22 23.568 44.229 31.423 13.008 7.855 18.212 7.855 31.22 0 13.009-7.855 31.22-20.948 44.23-31.422 13.008-10.474 28.618-5.237 33.822-15.71 5.203-10.474 18.211-39.277 23.415-49.75 5.203-10.474 13.008-20.948 10.406-28.803-2.602-7.856-7.804-26.185-10.406-34.04-2.602-7.855 0-28.803-10.407-36.658s-22.487-17.857-31.22-26.184c-8.734-8.327-5.204-13.092-15.61-20.948-10.407-7.855-33.823-18.329-44.23-23.565-10.406-5.237-20.813-5.237-31.22 0z"
      />
      <path
        fill="#BF4722"
        d="M75.644 49.319l48.694 33.238a6.886 6.886 0 003.7 1.155 6.665 6.665 0 003.7-1.155l48.73-33.35a6.65 6.65 0 002.748-5.947 6.633 6.633 0 00-3.672-5.418L130.85 13.733a6.692 6.692 0 00-5.846 0l-48.546 24.11a6.633 6.633 0 00-3.707 5.5 6.649 6.649 0 002.893 5.976zm68.933 43.671a6.721 6.721 0 002.886 5.515l39.037 26.68a6.55 6.55 0 008.103-.522l32.746-29.288a6.654 6.654 0 002.213-5.156 6.648 6.648 0 00-2.509-5.017L195.787 60.2a6.623 6.623 0 00-7.844-.298l-40.48 27.686a6.72 6.72 0 00-2.886 5.403zm-97.09 36.293a6.696 6.696 0 012.182 5.627 6.524 6.524 0 01-3.293 5.068l-23.31 13.973a6.586 6.586 0 01-7.5-.512 6.698 6.698 0 01-2.195-7.238l8.621-27.127a6.607 6.607 0 014.551-4.397 6.406 6.406 0 016.143 1.453l14.8 13.153zm126.432 2.832l-42.144-28.84a6.622 6.622 0 00-7.4 0l-42.145 28.84a6.754 6.754 0 00-2.886 5.068 6.88 6.88 0 002.22 5.44l42.108 37.672a6.597 6.597 0 004.403 1.677 6.63 6.63 0 004.403-1.677l42.107-37.672a6.73 6.73 0 002.183-5.44 6.606 6.606 0 00-2.849-5.068zm-112.41-7.452L28.802 95.375a6.804 6.804 0 01-2.22-5.254 6.574 6.574 0 012.478-5.03l31.266-25.152a6.696 6.696 0 017.882-.298l40.442 27.685a6.682 6.682 0 013.01 5.59 6.682 6.682 0 01-3.01 5.589l-39 26.68a6.624 6.624 0 01-8.14-.522zm167.95 42.069l-33.302-19.935a6.55 6.55 0 00-7.77.745l-40.702 36.33a6.696 6.696 0 00-2.13 6.13 6.66 6.66 0 004.055 5.05l56.463 22.878a6.333 6.333 0 002.442.485c2.621.008 5-1.54 6.069-3.95l17.501-39.2c1.425-3.102.29-6.787-2.627-8.533zm4.624-47.658l8.622 27.127h-.074a6.71 6.71 0 01-.975 5.958 6.61 6.61 0 01-5.353 2.724 6.478 6.478 0 01-3.367-.932l-23.348-13.973a6.489 6.489 0 01-3.182-5.068 6.62 6.62 0 012.183-5.627l14.8-13.19a6.59 6.59 0 016.143-1.454 6.72 6.72 0 014.551 4.435zm-123.51 70.91a6.66 6.66 0 00-2.109-6.111l-40.701-36.331a6.55 6.55 0 00-7.77-.745L26.69 166.732c-2.883 1.754-4.024 5.392-2.664 8.496l17.539 39.2c1.453 3.268 5.21 4.798 8.51 3.465l56.427-22.88a6.659 6.659 0 004.07-5.03zm19.98 11.178l45.29 18.333a6.665 6.665 0 013.997 5.44 6.614 6.614 0 01-2.813 6.223l-45.326 31.488a6.551 6.551 0 01-3.7 1.191 6.682 6.682 0 01-3.7-1.191l-45.29-31.488a6.651 6.651 0 01-2.849-6.222 6.775 6.775 0 014.144-5.44l45.29-18.334a6.69 6.69 0 014.958 0z"
      />
    </Box>
  );
}
