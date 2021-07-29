import PropTypes from 'prop-types';
import React from 'react';

import Field from '/components/Common/Field';

const EpisodesSearch = () => (
  <Field />
);

EpisodesSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default EpisodesSearch;
