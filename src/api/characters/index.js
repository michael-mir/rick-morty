import { API_METHODS } from '/common/constants/api';

import api from '..';

const charactersApi = {
  get: (data) => api.get(API_METHODS.CHARACTER, data),
};

export default charactersApi;
