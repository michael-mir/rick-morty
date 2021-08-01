import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({
  variant = 'light',
  animation = 'border',
  className = 'm-auto',
  ...props
}) => (
  <Spinner
    {...props}
    variant={variant}
    className={className}
    animation={animation}
  />
);

Loader.propTypes = {
  variant: PropTypes.string,
  animation: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
