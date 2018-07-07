import { TokenAction } from '../actions'
import { RECEIVE_TOKEN, REQUEST_TOKEN } from '../constants'
const user = (state = { loading: false }, action: TokenAction) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { loading: true }
    case RECEIVE_TOKEN:
      return { ...action.user, loading: false }
    default:
      return state
  }
}
export default user
