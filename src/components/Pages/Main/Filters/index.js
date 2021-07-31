import React from 'react';

import EpisodesSearchContainer from '/containers/MainPage/EpisodesSearchContainer';

import styles from './index.module.scss';
import EpisodesSort from './Sort';

const EpisodesFilters = () => (
  <div className={styles.filters}>
    <EpisodesSearchContainer />
    <EpisodesSort />
  </div>
);

export default EpisodesFilters;
