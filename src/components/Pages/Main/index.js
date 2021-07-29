import PropTypes from 'prop-types';
import React from 'react';

import useMount from '/common/hooks/mount';
import PageWrapper from '/components/Common/PageWrapper';
import EpisodesListContainer from '/containers/MainPage/EpisodesListContainer';

import EpisodesFilters from './Filters';

const MainPage = ({ getEpisodes }) => {
  useMount(() => getEpisodes());

  return (
    <PageWrapper>
      <EpisodesFilters />
      <EpisodesListContainer />
    </PageWrapper>
  );
};

MainPage.propTypes = {
  getEpisodes: PropTypes.func.isRequired,
};

export default MainPage;
