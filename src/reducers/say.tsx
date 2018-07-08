import { RECEIVE_SAY, REQUEST_SAY, SAYAction } from '../actions/say'

const say = (state = { loading: false }, action: SAYAction) => {
  switch (action.type) {
    case REQUEST_SAY:
      return { loading: true, payload: action.payload }
    case RECEIVE_SAY:
      return {
        ...action.say,
        loading: false,
        payload: action.payload,
        total: action.total
      }
    default:
      return state
  }
}
export default say
