import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
import {
  ADD_ARTICLE,
  ArticlesAction,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  IAddArticles,
  IDeleteArticles,
  IEditArticles,
  IPayload,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES
} from '../actions/articles'

import {
  addArticle,
  deleteArticle,
  fetchArticles,
  updateArticle
} from '../services'
interface IState {
  articles: IArticles
}
interface IArticles {
  payload: IPayload
}
function* yieldAddArticle(action: IAddArticles) {
  const response = yield call(addArticle, action.payload)
  console.log(response)
}
function* yieldArticles(action: ArticlesAction) {
  const { payload } = action
  const response = yield call(fetchArticles, payload)
  const { articles, total } = response
  yield put({ type: RECEIVE_ARTICLES, articles, total, payload })
}
function* yieldDeleteArticle(action: IDeleteArticles) {
  const response = yield call(deleteArticle, { id: action.id })
  if (response) {
    const payload = yield select((state: IState) => state.articles.payload)
    yield put({ type: REQUEST_ARTICLES, payload })
  }
}
function* yieldEditArticle(action: IEditArticles) {
  const response = yield call(updateArticle, action.payload)
  if (response) {
    const payload = yield select((state: IState) => state.articles.payload)
    yield put({ type: REQUEST_ARTICLES, payload })
  }
}
export function* watchYieldArticles() {
  yield all([
    takeLatest(ADD_ARTICLE, yieldAddArticle),
    takeEvery(REQUEST_ARTICLES, yieldArticles),
    takeEvery(DELETE_ARTICLE, yieldDeleteArticle),
    takeLatest(EDIT_ARTICLE, yieldEditArticle)
  ])
}
