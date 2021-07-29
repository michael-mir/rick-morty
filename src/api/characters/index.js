import { API_METHODS } from '/common/constants/api';

import api from '..';

const charactersApi = {
  get: (params) => api.get(API_METHODS.CHARACTER, { params }),
};

export default charactersApi;
