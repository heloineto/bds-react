import React from 'react';
import { Pagination } from '@bds-react/core';
import { MantineDemo } from '@mantinex/demo';
import { PaginationStylesApi } from '@docs/styles-api';

const code = `
import { Pagination } from '@bds-react/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;

function Demo(props: any) {
  return <Pagination total={10} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PaginationStylesApi,
  component: Demo,
  code,
  centered: true,
};
