import {
  collectAction,
  RECEIVE_COLLECT,
  REQUEST_COLLECT
} from '../actions/collect'

const collect = (state: object = {}, action: collectAction): object => {
  switch (action.type) {
    case REQUEST_COLLECT:
      return state
    case RECEIVE_COLLECT:
      return { ...state, ...action.collect }
    default:
      return state
  }
}
export default collect
