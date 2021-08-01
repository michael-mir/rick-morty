import PropTypes from 'prop-types';
import { parse } from 'qs';
import React, { useEffect } from 'react';

import Close from '/assets/svg/close.svg';
import Search from '/assets/svg/search.svg';
import useOnChange from '/common/hooks/onChange';
import Field from '/components/Common/Field';

import styles from './index.module.scss';

const EpisodesSearch = ({ onSearch, history, location }) => {
  const { name = '' } = parse(location.search, { ignoreQueryPrefix: true });
  const [value, onChange, onClear] = useOnChange(name);

  const onSubmit = () => {
    let url = location.pathname;

    if (value) {
      url += `?name=${value}`;
    }

    history.push(url);
  };

  useEffect(() => { onSearch(name ? { name } : {}); }, [name]);

  return (
    <Field
      value={value}
      onClick={onClear}
      onChange={onChange}
      onClickLeft={onSubmit}
      icons={[Search, Close]}
      className={styles.field}
      iconClassName={styles.field__icon}
    />
  );
};

EpisodesSearch.propTypes = {
  history: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default EpisodesSearch;
