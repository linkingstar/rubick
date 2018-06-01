export default function thunkMiddleware({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    // Compatible with redux action
    if (typeof action.payload === 'function') {
      const a = {
        ...action,
        payload: action.payload(dispatch, getState)
      };
      return next(a);
      // return action.payload(dispatch, getState);
    }
    return next(action);
  };
}
