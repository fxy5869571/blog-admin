import {
  ArticlesAction,
  IVisibleArticle,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES,
  VISIBLE_ARTICLE
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
const visible = (state: boolean = false, action: IVisibleArticle): boolean => {
  switch (action.type) {
    case VISIBLE_ARTICLE:
      return action.visible
    default:
      return state
  }
}
export { visible, articles }
