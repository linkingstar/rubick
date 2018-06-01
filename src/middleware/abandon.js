// 数据舍弃中间件
// 在payload 或者 meta中 __abandon__ 为true都会舍弃本条数据不更新到redux中
export default function abandonMiddleware({ dispatch, getState }) {
  return next => action => {
    const { payload = {}, meta = {} } = action || {};
    if (!payload.__abandon__ && !meta.__abandon__) {
      return next(action);
    }
  };
}
