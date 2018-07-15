import { combineReducers } from 'redux'
import { articles, visible } from './articles'
import collect from './collect'
import info from './info'
import say from './say'
import user from './user'

const reducers = combineReducers({
  articles,
  collect,
  info,
  say,
  user,
  visible
})
export default reducers
