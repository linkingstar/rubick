import { createAction } from 'redux-actions';

const PRE_FIX = 'HOME_';
export const SET_PARAMS = `${PRE_FIX}SET_PARAMS`;
export const GET_PRODUCTS = `${PRE_FIX}GET_PRODUCTS`;

export const setParams = createAction(SET_PARAMS, params => params);

export const getProducts = createAction(
  GET_PRODUCTS,
  (page = 1, pageCount = 20) => [
    {
      id: 1,
      name: '三只松鼠夏威夷果265g',
      sold: 15,
      price: 23.9,
      discount: 10,
      img: './image-test/szss.jpg',
      desc: '这是一袋夏威夷果'
    },
    {
      id: 2,
      name: '乐事薯片抹茶味',
      sold: 152,
      price: 5,
      discount: 4.2,
      img: './image-test/chips-1.png',
      desc: '这是一瓶矿泉水'
    },
    {
      id: 3,
      name: '印尼进口Tango威化饼干巧克力夹心160g',
      sold: 105,
      price: 3.5,
      img: './image-test/ccs.jpg',
      desc: '这是一袋威化饼干'
    },
    {
      id: 4,
      name: '六个核桃 核桃乳饮品 240ml',
      sold: 415,
      price: 5,
      img: './image-test/lght.jpg',
      desc: '这是一瓶六个核桃'
    },
    {
      id: 5,
      name: '雀巢速容咖啡原味1+2',
      sold: 16,
      price: 2,
      img: './image-test/qcsr.jpg',
      desc: '这是一袋速溶咖啡'
    },
    {
      id: 6,
      name: '有友泡椒凤爪160g',
      sold: 215,
      price: 9.5,
      img: './image-test/yyfz.jpg',
      desc: '这是一袋凤爪'
    },
    {
      id: 7,
      name: '泰国进口海苔小老板脆紫菜（经典味）32g',
      sold: 15,
      price: 9.9,
      img: './image-test/ywht.jpg',
      desc: '这是一袋海苔'
    },
    {
      id: 8,
      name: '蜀道香麻辣牛肉干100g成都特产',
      sold: 35,
      price: 15.5,
      img: './image-test/mlnrg.jpg',
      desc: '这是一袋牛肉干'
    },
    {
      id: 9,
      name: '全麦吐司面包185g/袋',
      sold: 15,
      price: 9.5,
      img: './image-test/toast-1.png',
      desc: '  全麦吐司面包185g/袋'
    },
    {
      id: 10,
      name: '可口可乐330ml',
      sold: 18,
      price: 3.5,
      img: './image-test/kckl.png',
      desc: '这是一瓶可口可乐'
    }
  ]
);
