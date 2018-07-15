import { all } from 'redux-saga/effects'
import { watchYieldArticles } from './articles'
import { watchYieldCollect } from './collect'
import { watchYieldSay } from './say'
import { watchYieldLogin } from './user'

export default function* rootSaga() {
  yield all([
    watchYieldArticles(),
    watchYieldCollect(),
    watchYieldLogin(),
    watchYieldSay()
  ])
}
