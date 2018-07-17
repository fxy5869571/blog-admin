import { connect } from 'react-redux'
import { ADD_SAY } from '../actions/say'
import AddSay from '../components/AddSay/AddSay'

const mapDispatchToProps = (dispatch: any) => ({
  addSay: (payload: object) => {
    dispatch({ type: ADD_SAY, payload })
  }
})
export default connect(
  null,
  mapDispatchToProps
)(AddSay)
