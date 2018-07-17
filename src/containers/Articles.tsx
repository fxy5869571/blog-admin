import { connect } from 'react-redux'
import {
  DELETE_ARTICLE,
  EDIT_ARTICLE,
  IPayload,
  REQUEST_ARTICLES,
  VISIBLE_ARTICLE
} from '../actions/articles'
import Articles from '../components/Articles/Articles'

interface IState {
  articles: IArticles
  visible: boolean
}
interface IArticles {
  articles: object[]
  total: number
  payload: IPayload
}
const mapStateToProps = ({ articles, visible }: IState): object => ({
  articles: articles.articles,
  payload: articles.payload || { pageIndex: 1, pageSize: 9 },
  total: articles.total,
  visible
})

export const mapDispatchToProps = (dispatch: any) => ({
  deleteArticle: (id: string) => {
    dispatch({ id, type: DELETE_ARTICLE })
  },
  editArticle: (payload: object) => {
    dispatch({ payload, type: EDIT_ARTICLE })
  },
  fetchArticle: (payload: IPayload = {}) => {
    dispatch({ payload, type: REQUEST_ARTICLES })
  },
  toggleVisible: (visible: boolean) => {
    dispatch({ type: VISIBLE_ARTICLE, visible })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
