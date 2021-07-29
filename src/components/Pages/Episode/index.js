import PropTypes from 'prop-types';
import React from 'react';

const EpisodePage = ({ name, ...props }) => (
  <div>
    {name}
    {console.log(props)}
  </div>
);

EpisodePage.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EpisodePage;
