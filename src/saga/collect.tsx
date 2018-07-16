import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import {
  ADD_COLLECT,
  collectAction,
  DELETE_COLLECT,
  IAddCollect,
  IDeleteCollect,
  RECEIVE_COLLECT,
  REQUEST_COLLECT
} from '../actions/collect'
import { blogPost, fetchCollect } from '../services'

interface IState {
  collect: ISay
}
interface ISay {
  payload: object
}
function* yieldCollect(action: collectAction) {
  const { total, collect } = yield call(fetchCollect, action.payload)
  yield put({ type: RECEIVE_COLLECT, total, collect })
}
function* yieldAddCollect(action: IAddCollect) {
  yield call(blogPost, '/add-collect', action.payload)
}
function* yieldDeleteCollect(action: IDeleteCollect) {
  yield call(blogPost, '/delete-collect', action.payload)
  const payload = yield select((state: IState) => state.collect.payload)
  console.log(payload)
  yield put({ type: REQUEST_COLLECT, payload })
}
export function* watchYieldCollect() {
  yield all([
    takeEvery(REQUEST_COLLECT, yieldCollect),
    takeEvery(ADD_COLLECT, yieldAddCollect),
    takeEvery(DELETE_COLLECT, yieldDeleteCollect)
  ])
}
