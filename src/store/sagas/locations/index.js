import { normalize } from 'normalizr';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '/api/locations';
import { fillLocationsData } from '/store/actions/locations';
import locationsSchema from '/store/schemas/locations';
import { GET_LOCATIONS_DATA } from '/store/types/locations';

export function* getEpisodesDataSaga({ payload }) {
  try {
    const { results, info } = yield call(api.get, payload);
    const {
      entities: { locations: entities },
      result: ids,
    } = normalize(results, [locationsSchema]);

    yield put(fillLocationsData({ entities, info, ids }));
  } catch (error) {
    yield put(fillLocationsData({ error }));
  }
}

export default function* locationsSagas() {
  yield takeLatest(GET_LOCATIONS_DATA, getEpisodesDataSaga);
}
