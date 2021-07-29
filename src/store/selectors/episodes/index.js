import { ENTITIES } from '/common/constants/redux';
import { createPureSelector, createStateSelector } from '/common/helpers/reselect';

const getState = createStateSelector(ENTITIES.EPISODES);
const getEpisodesIds = (state) => getState(state).ids;
const getEpisodesList = (state) => getState(state).entities;
const getProcessingStatus = (state) => getState(state).isProcessing;
const getEpisodeById = (state, { id }) => getEpisodesList(state)[id];

export const episodesIdsSelector = createPureSelector(getEpisodesIds);
export const episodeByIdSelector = createPureSelector(getEpisodeById, {});
export const processingStatusSelector = createPureSelector(getProcessingStatus);
