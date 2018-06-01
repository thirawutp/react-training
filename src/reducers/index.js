import { combineReducers } from 'redux'
import applicationReducer from './applicationReducer'
import filterReducer from './filterReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  application: applicationReducer,
  filter: filterReducer,
  ui: uiReducer
})

export default rootReducer