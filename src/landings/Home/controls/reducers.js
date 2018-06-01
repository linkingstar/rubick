import { handleActions } from 'redux-actions';

import { SET_PARAMS, GET_ORDER_RESULT } from './actions';

export const params = handleActions(
  {
    [SET_PARAMS]: (state, { payload }) => payload
  },
  {}
);

export const orderResult = handleActions(
  {
    [GET_ORDER_RESULT]: (state, { payload }) => {
      return payload;
    }
  },
  0
);
