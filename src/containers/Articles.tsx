import { connect, Dispatch } from 'react-redux'
import { DELETE_ARTICLE, IPayload, REQUEST_ARTICLES } from '../actions/articles'
import Articles from '../components/Articles/Articles'

interface IState {
  articles: IArticles
}
interface IArticles {
  articles: object[]
  total: number
}
const mapStateToProps = (state: IState): object => ({
  articles: state.articles.articles,
  total: state.articles.total
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteArticle: (id: string) => {
    dispatch({
      id,
      type: DELETE_ARTICLE
    })
  },
  fetchArticle: (payload: IPayload) => {
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
