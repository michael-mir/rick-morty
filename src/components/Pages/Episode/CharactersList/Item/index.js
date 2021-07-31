import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '/common/constants/routes';

import styles from './index.module.scss';

const CharactersItem = ({
  id = '',
  type = '',
  name = '',
  image = '',
  origin = {},
  status = '',
  gender = '',
  species = '',
}) => (
  <Link className={styles.block} to={`${ROUTES.CHARACTERS}/${id}`}>
    <img src={image} />
    <strong>{name}</strong>
    <div className={styles.block__field}>
      <span>Status: </span>
      <span>{status}</span>
    </div>
    <div className={styles.block__field}>
      <span>Gender: </span>
      <span>{gender}</span>
    </div>
    <div className={styles.block__field}>
      <span>Species: </span>
      <span>{species}</span>
    </div>
    <div className={styles.block__field}>
      <span>Type: </span>
      <span>{type || 'Default'}</span>
    </div>
    <div className={styles.block__field}>
      <span>Origin: </span>
      <span>{origin.name}</span>
    </div>
  </Link>
);

CharactersItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.shape({ name: PropTypes.string }),
  location: PropTypes.shape({ name: PropTypes.string }),
};

export default CharactersItem;
