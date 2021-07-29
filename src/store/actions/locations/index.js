import * as TYPES from '/store/types/locations';

export const getLocationsData = (payload) => ({
  type: TYPES.GET_LOCATIONS_DATA,
  payload,
});

export const fillLocationsData = (payload) => ({
  type: TYPES.FILL_LOCATIONS_DATA,
  payload,
});

export const clearLocationsData = (payload) => ({
  type: TYPES.CLEAR_LOCATIONS_DATA,
  payload,
});

export const getLocationById = (payload) => ({
  type: TYPES.GET_LOCATION_BY_ID,
  payload,
});
