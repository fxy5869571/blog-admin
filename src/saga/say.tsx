import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import {
  ADD_SAY,
  DELETE_SAY,
  IAddSAY,
  IDeleteSAY,
  RECEIVE_SAY,
  REQUEST_SAY,
  SAYAction
} from '../actions/say'

import { blogPost, getSay } from '../services'
interface IState {
  say: ISay
}
interface ISay {
  payload: any
}
function* yieldLogin(action: SAYAction) {
  const { say } = yield call(getSay, action.payload)
  yield put({ type: RECEIVE_SAY, say })
}
function* yieldAddSay(action: IAddSAY) {
  yield call(blogPost, action.payload)
  const payload = yield select((state: IState) => state.say.payload)
  yield put({ type: REQUEST_SAY, payload })
}
function* yieldDeleteSay(action: IDeleteSAY) {
  yield call(blogPost, { id: action.id })
  const payload = yield select((state: IState) => state.say.payload)
  yield put({ type: REQUEST_SAY, payload })
}
export function* watchYieldSay() {
  yield all([
    takeLatest(REQUEST_SAY, yieldLogin),
    takeLatest(DELETE_SAY, yieldDeleteSay),
    takeLatest(ADD_SAY, yieldAddSay)
  ])
}
