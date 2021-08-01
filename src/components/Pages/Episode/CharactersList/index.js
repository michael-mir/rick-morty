import PropTypes from 'prop-types';
import React from 'react';

import List from '/components/Common/List';
import Loader from '/components/Common/Loader';
import CharactersItemContainer from '/containers/EpisodePage/CharactersItemContainer';

const CharactersList = ({ isProcessing, ids }) => isProcessing ? (
  <Loader />
) : (
  <List
    keys={ids}
    className="pt-8"
    item={({ itemKey }) => (
      <CharactersItemContainer
        id={itemKey}
        key={itemKey}
      />
    )}
  />
);

CharactersList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default CharactersList;
