import { message } from 'antd'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  CLEAR_TOKEN,
  RECEIVE_TOKEN,
  REQUEST_TOKEN,
  TokenAction
} from '../actions/user'

import { login } from '../services'

function* yieldLogin(action: TokenAction) {
  const { user } = yield call(login, action.payload)
  localStorage.setItem('user', JSON.stringify(user))
  yield put({ type: RECEIVE_TOKEN, user })
}
function* yieldLogout() {
  localStorage.removeItem('user')
  yield message.warning('退出登录')
}
export function* watchYieldLogin() {
  yield all([
    takeLatest(REQUEST_TOKEN, yieldLogin),
    takeLatest(CLEAR_TOKEN, yieldLogout)
  ])
}
