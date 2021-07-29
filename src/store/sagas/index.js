import { all } from 'redux-saga/effects';

import chatsSagas from './characters';
import episodesSagas from './episodes';
import locationsSagas from './locations';

export default function* sagas() {
  yield all([
    locationsSagas(),
    episodesSagas(),
    chatsSagas(),
  ]);
}
