import * as TYPES from '/store/types/characters';

export const getCharactersData = (payload) => ({
  type: TYPES.GET_CHARACTERS_DATA,
  payload,
});

export const fillCharactersData = (payload) => ({
  type: TYPES.FILL_CHARACTERS_DATA,
  payload,
});

export const clearCharactersData = (payload) => ({
  type: TYPES.CLEAR_CHARACTERS_DATA,
  payload,
});

export const getCharacterById = (payload) => ({
  type: TYPES.GET_CHARACTER_BY_ID,
  payload,
});

export const getCharactersList = (payload) => ({
  type: TYPES.GET_CHARACTERS_LIST,
  payload,
});
