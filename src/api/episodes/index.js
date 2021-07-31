import { API_METHODS } from '/common/constants/api';

import api from '..';

const episodesApi = {
  get: (params) => api.get(API_METHODS.EPISODE, { params }),
  getById: (id) => api.get(`${API_METHODS.EPISODE}/${id}`),
};

export default episodesApi;
