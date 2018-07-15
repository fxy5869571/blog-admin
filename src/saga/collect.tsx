import { call, put, takeEvery } from 'redux-saga/effects'
import {
  collectAction,
  RECEIVE_COLLECT,
  REQUEST_COLLECT
} from '../actions/collect'
import { fetchCollect } from '../services'

function* yieldInfo(action: collectAction) {
  const info = yield call(fetchCollect, action.payload)
  yield put({ type: RECEIVE_COLLECT, info })
}
export function* watchYieldCollect() {
  yield takeEvery(REQUEST_COLLECT, yieldInfo)
}
