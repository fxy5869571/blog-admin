import { connect } from 'react-redux'
import { DELETE_SAY, REQUEST_SAY } from '../actions/say'
import Say from '../components/Say/Say'

const mapStateToProps = ({ say }: any) => ({
  payload: say.payload || { pageIndex: 1, pageSize: 10 },
  say: say.say,
  total: say.total || 0
})
const mapDispatchToProps = (dispatch: any) => ({
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
