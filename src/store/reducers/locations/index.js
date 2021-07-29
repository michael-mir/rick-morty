import StateModel from '/common/models/state';
import * as ACTIONS from '/store/types/locations';

const initialState = new StateModel();

const locationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_LOCATIONS_DATA:
      return {
        ...state,
        isProcessing: true,
      };

    case ACTIONS.FILL_LOCATIONS_DATA:
      return {
        ...state,
        ...payload,
        isProcessing: false,
      };

    case ACTIONS.CLEAR_LOCATIONS_DATA:
      return initialState;

    default:
      return state;
  }
};

export default locationsReducer;
