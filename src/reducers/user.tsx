import {
  CLEAR_TOKEN,
  RECEIVE_TOKEN,
  REQUEST_TOKEN,
  TokenAction
} from '../actions/user'

const user = (state = { loading: false }, action: TokenAction) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { loading: true }
    case RECEIVE_TOKEN:
      return { ...action.user, loading: false }
    case CLEAR_TOKEN:
      return { loading: false }
    default:
      return state
  }
}
export default user
