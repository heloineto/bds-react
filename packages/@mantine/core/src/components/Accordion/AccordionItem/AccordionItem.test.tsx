import { createContextContainer, tests } from '@mantine-tests/core';
import { Accordion } from '../Accordion';
import { AccordionItem, AccordionItemProps, AccordionItemStylesNames } from './AccordionItem';

const defaultProps: AccordionItemProps = {
  value: 'test',
};

const ContextContainer = createContextContainer(AccordionItem, Accordion, {});

describe('@bds-react/core/AccordionItem', () => {
  tests.itSupportsSystemProps<AccordionItemProps, AccordionItemStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@bds-react/core/AccordionItem',
    stylesApiSelectors: ['item'],
    stylesApiName: 'Accordion',
    selector: '.mantine-Accordion-item',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: AccordionItem,
    props: defaultProps,
    error: 'Accordion component was not found in the tree',
  });
});
