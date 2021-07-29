import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import styles from './index.module.scss';

const Field = ({
  onClick = () => {},
  rightIcon = null,
  leftIcon = null,
  className = '',
  error = false,
  icons = [],
  ...props
}) => {
  const [LeftIcon = leftIcon, RightIcon = rightIcon] = icons;
  const inputRef = props.ref || useRef();

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={classNames(
        styles.field,
        className,
        { [styles.field_error]: error },
      )}
    >
      {LeftIcon && (
        <div className={styles.field__icon}>
          <LeftIcon />
        </div>
      )}

      <input {...props} ref={inputRef} />

      {RightIcon && (
        <div className={styles.field__icon} onClick={onClick}>
          <RightIcon />
        </div>
      )}
    </div>
  );
};

Field.propTypes = {
  ref: PropTypes.any,
  error: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  leftIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  rightIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func])),
};

export default Field;
