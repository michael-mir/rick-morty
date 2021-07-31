import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'react-bootstrap';

import CharactersItemContainer from '/containers/EpisodePage/CharactersItemContainer';

import styles from './index.module.scss';

const CharactersList = ({ isProcessing, ids }) => isProcessing ? (
  <Spinner className="text-white" animation="border" />
) : (
  <div className={styles.list}>
    {ids.map(id => (
      <CharactersItemContainer
        id={id}
        key={id}
      />
    ))}
  </div>
);

CharactersList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default CharactersList;
