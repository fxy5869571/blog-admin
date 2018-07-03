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

// blog articles action
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
type ArticlesAction = IRequestArticles | IReceiveArticles
export {
  ArticlesAction,
  DELETE_ARTICLE,
  IPayload,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  IDeleteArticles
}
