import { combineReducers } from 'redux'
import { articles, visible } from './articles'
import info from './info'
import resume from './resume'
import say from './say'
import user from './user'
const reducers = combineReducers({
  articles,
  info,
  resume,
  say,
  user,
  visible
})
export default reducers
