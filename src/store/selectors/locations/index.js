import { ENTITIES } from '/common/constants/redux';
import { createPureSelector, createStateSelector } from '/common/helpers/reselect';

const getState = createStateSelector(ENTITIES.LOCATIONS);
const getLocationsIds = (state) => getState(state).ids;
const getLocationsList = (state) => getState(state).entities;
const getProcessingStatus = (state) => getState(state).isProcessing;
const getLocationById = (state, { id }) => getLocationsList(state)[id];

export const locationsIdsSelector = createPureSelector(getLocationsIds);
export const locationByIdSelector = createPureSelector(getLocationById, {});
export const processingStatusSelector = createPureSelector(getProcessingStatus);
