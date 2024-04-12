import React from 'react';
import { render, tests } from '@mantine-tests/core';
import { TextStylesNames } from '../Text';
import { Highlight, HighlightProps } from './Highlight';

const defaultProps: HighlightProps = {
  children: 'test',
  highlight: 't',
};

describe('@bds-react/core/Highlight', () => {
  tests.itSupportsSystemProps<HighlightProps, TextStylesNames>({
    component: Highlight,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    id: true,
    refType: HTMLParagraphElement,
    displayName: '@bds-react/core/Highlight',
    stylesApiSelectors: ['root'],
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark')!.textContent).toBe('He');
  });
});
