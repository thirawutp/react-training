import { all } from 'redux-saga/effects'
import customerWatcher from './customerWatcher'

function* rootSaga() {
  yield all([
    customerWatcher()
  ])
}

export default rootSaga