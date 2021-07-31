import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { empty } from '/common/helpers/common';

import styles from './index.module.scss';

const Field = ({
  onClickLeft = empty,
  iconClassName = '',
  rightIcon = null,
  leftIcon = null,
  onClick = empty,
  className = '',
  icons = [],
  ...props
}) => {
  const [LeftIcon = leftIcon, RightIcon = rightIcon] = icons;
  const inputRef = props.ref || useRef();

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={classNames(styles.field, className)}
    >
      {LeftIcon && (
        <div
          className={classNames(styles.field__icon, iconClassName)}
          onClick={onClickLeft}
        >
          <LeftIcon />
        </div>
      )}

      <input {...props} ref={inputRef} />

      {RightIcon && (
        <div
          className={classNames(styles.field__icon, iconClassName)}
          onClick={onClick}
        >
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
  onClickLeft: PropTypes.func,
  iconClassName: PropTypes.string,
  leftIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  rightIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func])),
};

export default Field;
