import { combineReducers } from 'redux'

import home from './home'
import play from './play'
import winner from './winner'

export default combineReducers({
  home,
  play,
  winner,
})
