import { normalize } from 'normalizr';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '/api/episodes';
import { fillEpisodesData } from '/store/actions/episodes';
import episodesSchema from '/store/schemas/episodes';
import { GET_EPISODES_DATA } from '/store/types/episodes';

export function* getEpisodesDataSaga({ payload }) {
  try {
    const { results, info } = yield call(api.get, payload);
    const {
      entities: { episodes: entities },
      result: ids,
    } = normalize(results, [episodesSchema]);

    yield put(fillEpisodesData({ entities, info, ids }));
  } catch (error) {
    yield put(fillEpisodesData({ error }));
  }
}

export default function* episodesSagas() {
  yield takeLatest(GET_EPISODES_DATA, getEpisodesDataSaga);
}
