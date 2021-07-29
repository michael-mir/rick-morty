import { API_METHODS } from '/common/constants/api';

import api from '..';

const locationsApi = {
  get: (data) => api.get(API_METHODS.LOCATION, data),
};

export default locationsApi;
