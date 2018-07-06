// blog articles payload
interface IPayload {
  pageIndex?: number
  pageSize?: number
  timeFile?: boolean
  id?: string
}

// blog articles const
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
type REQUEST_ARTICLES = typeof REQUEST_ARTICLES
const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
type RECEIVE_ARTICLES = typeof RECEIVE_ARTICLES
const DELETE_ARTICLE = 'DELETE_ARTICLE'
type DELETE_ARTICLE = typeof DELETE_ARTICLE
const ADD_ARTICLE = 'ADD_ARTICLE'
type ADD_ARTICLE = typeof ADD_ARTICLE
const VISIBLE_ARTICLE = 'VISIBLE_ARTICLE'
type VISIBLE_ARTICLE = typeof VISIBLE_ARTICLE
const EDIT_ARTICLE = 'EDIT_ARTICLE'
type EDIT_ARTICLE = typeof EDIT_ARTICLE

// blog articles action
interface IAddArticles {
  type: ADD_ARTICLE
  payload: object
}
interface IEditArticles {
  type: EDIT_ARTICLE
  payload: object
}
interface IRequestArticles {
  type: REQUEST_ARTICLES
  payload: IPayload
}
interface IDeleteArticles {
  type: DELETE_ARTICLE
  id: string
}
interface IReceiveArticles {
  type: RECEIVE_ARTICLES
  payload: IPayload
  total: number
  articles: object[]
}
interface IVisibleArticle {
  type: VISIBLE_ARTICLE
  visible: boolean
}
type ArticlesAction = IRequestArticles | IReceiveArticles
export {
  EDIT_ARTICLE,
  VISIBLE_ARTICLE,
  ADD_ARTICLE,
  ArticlesAction,
  DELETE_ARTICLE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  IEditArticles,
  IPayload,
  IAddArticles,
  IVisibleArticle,
  IDeleteArticles
}
