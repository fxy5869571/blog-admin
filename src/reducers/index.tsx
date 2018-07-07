import { combineReducers } from 'redux'
import { articles, visible } from './articles'
import info from './info'
import resume from './resume'
import user from './user'
const reducer = combineReducers({
  articles,
  info,
  resume,
  user,
  visible
})
export default reducer
