import { isFSA } from 'flux-standard-action';

function isPromise(val) {
  return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action) ? action.then(dispatch) : next(action);
    }

    const promise = action.payload;
    if (!isPromise(promise)) return next(action);
    promise.then((res = {}) => {
      // abandon 为 true时，不将数据发送到reducer，舍弃这条数据
      if (!res.__abandon__) {
        if (res.result) {
          return next({ ...action, payload: res.data });
        } else {
          return next({ ...action, payload: res, error: true });
        }
      }
    });
    // .catch(error => {
    //   throw new Error(error);
    //   return next({ ...action, payload: error, error: true  });
    //   // 不直接抛出错误，通过error middleware 处理错误
    // });

    return promise;
  };
}
