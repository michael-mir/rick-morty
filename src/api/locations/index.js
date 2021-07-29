import { API_METHODS } from '/common/constants/api';

import api from '..';

const locationsApi = {
  get: (params) => api.get(API_METHODS.LOCATION, { params }),
};

export default locationsApi;
