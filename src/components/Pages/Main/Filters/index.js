import React from 'react';

import styles from './index.module.scss';
import EpisodesSearch from './Search';
import EpisodesSort from './Sort';

const EpisodesFilters = () => (
  <div className={styles.filters}>
    <EpisodesSearch />
    <EpisodesSort />
  </div>
);

export default EpisodesFilters;
