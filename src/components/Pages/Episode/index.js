import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import { getEpisodePosition } from '/common/helpers/episodes';
import useMount from '/common/hooks/mount';
import PageWrapper from '/components/Common/PageWrapper';
import CharactersListContainer from '/containers/EpisodePage/CharactersListContainer';

import styles from './index.module.scss';

const EpisodePage = ({ episodeInfo, isProcessing, getCharacters, getEpisodeInfo }) => {
  const { name, episode, air_date: airDate, characters = [] } = episodeInfo;
  const ids = characters.map(url => +(url.match(/\d+$/) || [])[0]);
  const { season, index } = getEpisodePosition(episode);

  useMount(() => {
    if (!Object.keys(episodeInfo).length) {
      getEpisodeInfo();
    }
  });

  useEffect(() => { getCharacters(ids); }, [ids]);

  return (
    <PageWrapper>
      {isProcessing ? (
        <Spinner
          variant="light"
          className="m-auto"
          animation="border"
        />
      ) : (
        <div className={styles.page}>
          <h1>
            Episode &#34;{name}&#34;
          </h1>
          <div className={styles.page__field}>
            <strong>Season:</strong>
            <span>{season}</span>
          </div>
          <div className={styles.page__field}>
            <strong>Number:</strong>
            <span>{index}</span>
          </div>
          <div className={styles.page__field}>
            <strong>Release date:</strong>
            <span>{airDate}</span>
          </div>
          <div className={styles.page__field}>
            <strong>Characters:</strong>
          </div>
          <CharactersListContainer ids={ids} />
        </div>
      )}
    </PageWrapper>
  );
};

EpisodePage.propTypes = {
  getEpisodeInfo: PropTypes.func.isRequired,
  getCharacters: PropTypes.func.isRequired,
  episodeInfo: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default EpisodePage;
