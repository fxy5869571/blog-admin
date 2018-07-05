import { connect, Dispatch } from 'react-redux'
import { DELETE_ARTICLE, IPayload, REQUEST_ARTICLES } from '../actions/articles'
import Articles from '../components/Articles/Articles'

interface IState {
  articles: IArticles
}
interface IArticles {
  articles: object[]
  total: number
  payload: IPayload
}
const mapStateToProps = ({ articles }: IState): object => ({
  articles: articles.articles,
  payload: articles.payload || { pageIndex: 1, pageSize: 10 },
  total: articles.total
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteArticle: (id: string) => {
    dispatch({
      id,
      type: DELETE_ARTICLE
    })
  },
  fetchArticle: (payload: IPayload = {}) => {
    dispatch({
      payload,
      type: REQUEST_ARTICLES
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)
