import { handleActions } from 'redux-actions';

import { GET_PRODUCTS, SET_PARAMS } from './actions';

export const params = handleActions(
  {
    [SET_PARAMS]: (state, { payload }) => payload
  },
  {}
);

export const products = handleActions(
  {
    [GET_PRODUCTS]: (state, { payload }) => [{ data: payload }]
  },
  [{ data: [] }]
);
