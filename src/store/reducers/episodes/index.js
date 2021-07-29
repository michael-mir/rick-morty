import StateModel from '/common/models/state';
import * as ACTIONS from '/store/types/episodes';

const initialState = {
  ...new StateModel(),
  sort: {},
};

const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_EPISODES_DATA:
      return {
        ...state,
        isProcessing: true,
      };

    case ACTIONS.FILL_EPISODES_DATA:
      return {
        ...state,
        ...payload,
        isProcessing: false,
      };

    case ACTIONS.CLEAR_EPISODES_DATA:
      return initialState;

    default:
      return state;
  }
};

export default episodesReducer;
