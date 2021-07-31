import { createSelector } from 'reselect';

import { ENTITIES } from '/common/constants/redux';
import { getEpisodePosition } from '/common/helpers/episodes';
import { createPureSelector, createStateSelector } from '/common/helpers/reselect';

const getState = createStateSelector(ENTITIES.EPISODES);
const getSortValue = (state) => getState(state).sort;
const getEpisodesList = (state) => getState(state).entities;
const getProcessingStatus = (state) => getState(state).isProcessing;
const getEpisodeByPosition = (state, { position }) => getEpisodesList(state)[position];
const getEpisodeById = (state, own) => Object.values(getEpisodesList(state))
  .find(({ id }) => own.id === id);

export const episodeByPositionSelector = createPureSelector(getEpisodeByPosition, {});
export const processingStatusSelector = createPureSelector(getProcessingStatus);
export const episodeByIdSelector = createPureSelector(getEpisodeById, {});
export const episodesListSelector = createSelector(
  [getEpisodesList, getSortValue],
  (entities, sort) => {
    const [[field, direction] = []] = Object.entries(sort);
    let items = Object.values(entities);

    if (field) {
      items = items.sort((a, b) => {
        if (a[field] > b[field]) return direction ? 1 : -1;
        if (a[field] < b[field]) return direction ? -1 : 1;
        return 0;
      });
    }

    return items.reduce((obj, { id, episode }) => {
      const { season } = getEpisodePosition(episode);

      return {
        ...obj,
        [season]: [...(obj[season] || []), id],
      };
    }, {});
  },
);
