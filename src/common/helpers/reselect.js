import { createSelector } from 'reselect';

import { pure } from './common';

const pureWithDefault = (def) => (data) => {
  if (typeof data === 'undefined') return def;

  return data;
};
const getState = (namespace) => (state) => state[namespace];

export const createPureSelector = (selector, def) => createSelector(selector, pureWithDefault(def));
export const createStateSelector = (namespace) => createPureSelector(getState(namespace), pure);
