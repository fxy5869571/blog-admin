import { connect } from 'react-redux'
import { ADD_ARTICLE } from '../actions/articles'
import AddArticle from '../components/AddArticle/AddArticle'
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

export const mapDispatchToProps = (dispatch: any) => ({
  addArticle: (payload: object) => {
    dispatch({
      payload,
      type: ADD_ARTICLE
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle)
