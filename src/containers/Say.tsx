import { connect, Dispatch } from 'react-redux'
import { DELETE_SAY, REQUEST_SAY } from '../actions/say'
import Say from '../components/Say/Say'

const mapStateToProps = ({ say }: any) => ({
  say: say.say,
  total: say.total
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteSay: (id: string) => {
    dispatch({ type: DELETE_SAY, payload: { _id: id } })
  },
  fetchSay: (payload: object = {}) => {
    dispatch({ type: REQUEST_SAY, payload })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Say)
