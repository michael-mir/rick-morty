import * as TYPES from '/store/types/episodes';

export const getEpisodesData = (payload) => ({
  type: TYPES.GET_EPISODES_DATA,
  payload,
});

export const fillEpisodesData = (payload) => ({
  type: TYPES.FILL_EPISODES_DATA,
  payload,
});

export const clearEpisodesData = (payload) => ({
  type: TYPES.CLEAR_EPISODES_DATA,
  payload,
});

export const getEpisodeById = (payload) => ({
  type: TYPES.GET_EPISODE_BY_ID,
  payload,
});
