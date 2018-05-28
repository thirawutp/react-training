import { combineReducers } from 'redux'
import applicationReducer from './applicationReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  application: applicationReducer,
  filter: filterReducer
})

export default rootReducer