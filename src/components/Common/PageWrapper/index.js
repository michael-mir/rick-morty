import React from 'react';

import styles from './index.module.scss';

const PageWrapper = props => (
  <div {...props} className={styles.pageWrapper} />
);

export default PageWrapper;
