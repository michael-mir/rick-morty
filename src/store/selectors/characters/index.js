import { ENTITIES } from '/common/constants/redux';
import { createPureSelector, createStateSelector } from '/common/helpers/reselect';

const getState = createStateSelector(ENTITIES.CHARACTERS);
const getCharactersIds = (state) => getState(state).ids;
const getCharactersList = (state) => getState(state).entities;
const getProcessingStatus = (state) => getState(state).isProcessing;
const getCharacterById = (state, { id }) => getCharactersList(state)[id];

export const charactersIdsSelector = createPureSelector(getCharactersIds);
export const characterByIdSelector = createPureSelector(getCharacterById, {});
export const processingStatusSelector = createPureSelector(getProcessingStatus);
