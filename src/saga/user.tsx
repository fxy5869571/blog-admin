import { call, put, takeLatest } from 'redux-saga/effects'
import { TokenAction } from '../actions'
import { RECEIVE_TOKEN, REQUEST_TOKEN } from '../constants'
import { login } from '../services'

function* yieldLogin(action: TokenAction) {
  const { user } = yield call(login, action.payload)
  localStorage.setItem('user', JSON.stringify(user))
  yield put({ type: RECEIVE_TOKEN, user })
}
export function* watchYieldLogin() {
  yield takeLatest(REQUEST_TOKEN, yieldLogin)
}
