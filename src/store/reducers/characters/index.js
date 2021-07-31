import StateModel from '/common/models/state';
import * as ACTIONS from '/store/types/characters';

const initialState = new StateModel();

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_CHARACTERS_LIST:
    case ACTIONS.GET_CHARACTERS_DATA:
      return {
        ...state,
        isProcessing: true,
      };

    case ACTIONS.FILL_CHARACTERS_DATA:
      return {
        ...state,
        ...payload,
        entities: {
          ...state.entities,
          ...payload.entities,
        },
        isProcessing: false,
      };

    case ACTIONS.CLEAR_CHARACTERS_DATA:
      return initialState;

    default:
      return state;
  }
};

export default charactersReducer;
