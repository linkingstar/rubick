import { createAction } from 'redux-actions';

const PRE_FIX = 'LAUNCHER_';
export const SET_PARAMS = `${PRE_FIX}SET_PARAMS`;
export const GET_ORDER_RESULT = `${PRE_FIX}GET_ORDER_RESULT`;

export const setParams = createAction(SET_PARAMS, params => params);

export const getOrderResult = createAction(GET_ORDER_RESULT, () => {
  const data = {
    orderId: '1310603',
    orderType: '欧元',
    soldOut: true, //是否买入
    entryOrderMethod: 0, //开仓/挂单方式 0-挂单 1-市价
    BURU: 1000, //交易手数
    dollarsInvested: 3.99, //占用资金
    targetPrice: 1.233333,
    stopOutPrice: null,
    profitTaking: null,
    vailTimeRange: '08:00-18:00',
    beginTime: '2017-10-18 12:07', //开始时间
    endTime: '2017-10-19 12:06', //结束时间
    openTime: '08:00' //开仓时间
  };
  return { result: true, data };
});
