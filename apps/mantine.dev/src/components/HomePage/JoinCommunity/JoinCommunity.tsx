import React from 'react';
import { Space } from '@bds-react/core';
import { SocialCards } from '../../SocialCards';
import { PageSection } from '../PageSection/PageSection';

export function JoinCommunity() {
  return (
    <PageSection title="Join the community">
      <Space h="md" />
      <SocialCards />
      <Space h={120} />
    </PageSection>
  );
}
