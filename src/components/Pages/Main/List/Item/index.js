import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '/common/constants/routes';
import { getEpisodePosition } from '/common/helpers/episodes';

import styles from './index.module.scss';

const EpisodesItem = ({ id, name, episode, air_date: airDate }) => {
  const { index } = getEpisodePosition(episode);

  return (
    <Link className={styles.item} to={`${ROUTES.EPISODES}/${id}`}>
      <div className={styles.item__header}>
        <strong>
          {index}
        </strong>
        <span>
          {name}
        </span>
      </div>
      <span className={styles.item__date}>
        {airDate}
      </span>
    </Link>
  );
};

EpisodesItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  air_date: PropTypes.string.isRequired,
};

export default EpisodesItem;
