import React from 'react';

import PageWrapper from '/components/Common/PageWrapper';
import EpisodesListContainer from '/containers/MainPage/EpisodesListContainer';

import EpisodesFilters from './Filters';

const MainPage = () => (
  <PageWrapper>
    <EpisodesFilters />
    <EpisodesListContainer />
  </PageWrapper>
);

export default MainPage;
