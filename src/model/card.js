import * as cardsService from '../service/card';

export default {
  namespace: 'cards',

  state: {
    cardsList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(cardsService.queryList);
      console.log('queryList');
      yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
    },
    *deleteOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.deleteOne, payload);
      console.log('deleteOne');
      return rsp;
    },
    *addOne({ payload }, { call, put }) {
      const rsp = yield call(cardsService.addOne, payload);
      yield put({ type: 'queryList' });
      return rsp;
    },
    *getStatistic({ payload, callback }, { call, put }) {
      const rsp = yield call(cardsService.getStatistic, payload);
      console.log('rsp', rsp);
      yield put({
        type: 'saveStatistic',
        payload: {
          id: payload,
          data: rsp.result,
        },
      });
      callback && callback();
      return rsp;
    },
  },

  reducers: {
    saveList(state, { payload: { cardsList } }) {
      return {
        ...state,
        cardsList,
      };
    },
    saveStatistic(state, { payload: { id, data } }) {
      return {
        ...state,
        statistic: {
          ...state.statistic,
          [id]: data,
        },
      };
    },
  },
};
