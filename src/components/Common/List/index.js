import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './index.module.scss';

const List = ({
  item: Item = () => null,
  children = null,
  className = '',
  keys = [],
}) => (
  <div className={classNames(styles.list, className)}>
    {children || keys.map(key => (
      <Item key={key} itemKey={key} />
    ))}
  </div>
);

List.propTypes = {
  className: PropTypes.string,
  item: PropTypes.elementType,
  children: PropTypes.node,
  keys: PropTypes.array,
};

export default List;
