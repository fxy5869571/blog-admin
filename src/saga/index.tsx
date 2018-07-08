import { all } from 'redux-saga/effects'
import { watchYieldArticles } from './articles'
import { watchYieldResume } from './resume'
import { watchYieldSay } from './say'
import { watchYieldLogin } from './user'

export default function* rootSaga() {
  yield all([
    watchYieldArticles(),
    watchYieldResume(),
    watchYieldLogin(),
    watchYieldSay()
  ])
}
