import { combineReducers } from 'redux'
import article from './article'
import { articles, visible } from './articles'
import info from './info'
import resume from './resume'
const reducer = combineReducers({
  article,
  articles,
  info,
  resume,
  visible
})
export default reducer
