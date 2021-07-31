import StateModel from '/common/models/state';
import * as ACTIONS from '/store/types/episodes';

const initialState = {
  ...new StateModel(),
  sort: {},
};

const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_EPISODE_BY_ID:
    case ACTIONS.GET_EPISODES_DATA:
      return {
        ...state,
        isProcessing: true,
      };

    case ACTIONS.FILL_EPISODES_DATA:
      return {
        ...state,
        ...payload,
        entities: {
          ...state.entities,
          ...payload.entities,
        },
        isProcessing: false,
      };

    case ACTIONS.CLEAR_EPISODES_DATA:
      return initialState;

    default:
      return state;
  }
};

export default episodesReducer;
