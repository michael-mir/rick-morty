import { normalize } from 'normalizr';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '/api/characters';
import { fillCharactersData } from '/store/actions/characters';
import charactersSchema from '/store/schemas/characters';
import { GET_CHARACTERS_DATA } from '/store/types/characters';

export function* getCharactersDataSaga({ payload }) {
  try {
    const { results, info } = yield call(api.get, payload);
    const {
      entities: { characters: entities },
      result: ids,
    } = normalize(results, [charactersSchema]);

    yield put(fillCharactersData({ entities, info, ids }));
  } catch (error) {
    yield put(fillCharactersData({ error }));
  }
}

export default function* chatsSagas() {
  yield takeLatest(GET_CHARACTERS_DATA, getCharactersDataSaga);
}
