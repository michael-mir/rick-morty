import { API_METHODS } from '/common/constants/api';

import api from '..';

const episodesApi = {
  get: (data) => api.get(API_METHODS.EPISODE, data),
};

export default episodesApi;
