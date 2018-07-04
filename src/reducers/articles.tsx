import {
  ArticlesAction,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES
} from '../actions/articles'

const articles = (state: object = {}, action: ArticlesAction): object => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return { payload: action.payload, ...state }
    case RECEIVE_ARTICLES:
      return {
        articles: action.articles,
        payload: action.payload,
        total: action.total
      }
    default:
      return state
  }
}
export default articles
