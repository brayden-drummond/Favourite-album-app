import { combineReducers } from 'redux'

import home from './home'
import play from './play'
import winner from './winner'
import results from './results'
import create from './create'

export default combineReducers({
  home,
  play,
  winner,
  results,
  create,
})
