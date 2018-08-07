import { connect } from 'react-redux'
import { ADD_ARTICLE } from '../actions/articles'
import AddArticle from '../components/AddArticle/AddArticle'

export const mapDispatchToProps = (dispatch: any) => ({
  addArticle: (payload: object) => {
    dispatch({
      payload,
      type: ADD_ARTICLE
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AddArticle)
