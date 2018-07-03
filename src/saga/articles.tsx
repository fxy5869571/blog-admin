import { call, put, select, takeEvery } from 'redux-saga/effects'
import {
  ArticlesAction,
  DELETE_ARTICLE,
  IDeleteArticles,
  IPayload,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES
} from '../actions/articles'

import { fetchArticles } from '../services'
interface IState {
  articles: IArticles
}
interface IArticles {
  payload: IPayload
}
function* yieldArticles(action: ArticlesAction) {
  const { payload } = action
  const response = yield call(fetchArticles, payload)
  const { articles, total } = response
  yield put({ type: RECEIVE_ARTICLES, articles, total })
}
function* deleteArticle(action: IDeleteArticles) {
  console.log(action.id)
  const payload = yield select((state: IState) => state.articles.payload)
  yield put({ type: REQUEST_ARTICLES, payload })
}
export function* watchYieldArticles() {
  yield takeEvery(REQUEST_ARTICLES, yieldArticles)
  yield takeEvery(DELETE_ARTICLE, deleteArticle)
}
