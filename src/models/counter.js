import {delay} from 'dva/saga'

export default {
  namespace: 'counter',
  state: {
    count: 2
  },
  reducers: {
    add(state, action) {
      return {count: state.count + 1}
    },
  },
  effects: {
    // 用于异步请求
    * asyncAdd({payload}, {call, put, select}) {
      // 获取state的值
      const counter = yield select(state => state.counter)
      console.log(counter);
      yield call(delay, 1000)
      yield put({type: 'add'})
    }
  }
}
