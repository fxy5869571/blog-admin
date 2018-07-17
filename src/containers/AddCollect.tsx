import { connect } from 'react-redux'
import { ADD_COLLECT } from '../actions/collect'
import AddCollect from '../components/AddCollect/AddCollect'

export const mapDispatchToProps = (dispatch: any) => ({
  addCollect: (payload: object) => {
    dispatch({
      payload,
      type: ADD_COLLECT
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(AddCollect)
