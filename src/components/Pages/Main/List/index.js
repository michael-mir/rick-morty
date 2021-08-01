import PropTypes from 'prop-types';
import React from 'react';

import List from '/components/Common/List';
import Loader from '/components/Common/Loader';
import EpisodesItemContainer from '/containers/MainPage/EpisodesItemContainer';

import styles from './index.module.scss';

const EpisodesList = ({ isProcessing, items }) => (
  <div className={styles.episodesList}>
    {isProcessing ? (
      <Loader />
    ) : (
      <>
        {Object.entries(items).map(([season, episodes]) => (
          <div key={season} className={styles.episodesList__season}>
            <h2 className="mb-16">
              Season {+season}
            </h2>
            <List
              keys={episodes}
              item={({ itemKey }) => (
                <EpisodesItemContainer
                  position={itemKey}
                  key={itemKey}
                />
              )}
            />
          </div>
        ))}
      </>
    )}
  </div>
);

EpisodesList.propTypes = {
  items: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default EpisodesList;
