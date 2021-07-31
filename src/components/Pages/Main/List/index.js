import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'react-bootstrap';

import EpisodesItemContainer from '/containers/MainPage/EpisodesItemContainer';

import styles from './index.module.scss';

const EpisodesList = ({ isProcessing, items }) => (
  <div className={styles.episodesList}>
    {isProcessing ? (
      <Spinner
        variant="light"
        className="m-auto"
        animation="border"
      />
    ) : (
      <>
        {Object.entries(items).map(([season, episodes]) => (
          <div key={season} className={styles.season}>
            <h2 className="mb-16">
              Season {+season}
            </h2>
            <div className={styles.season__episodes}>
              {episodes.map((id) => (
                <EpisodesItemContainer
                  position={id}
                  key={id}
                />
              ))}
            </div>
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
