import { takeLatest } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import { validateIdNo } from '../utils/validate'

function* fetchCustomerWorker(action) {
  if (validateIdNo(action.payload.value) === undefined) {
    const url = `http://localhost:8080/customers/${action.payload.value}`
    const { data } = yield call(axios.get, url)
    console.log(data)
    const prefix = action.payload.key.includes('Insured_') ? 'Insured_' : 'Payer_'
    const id = yield select((state) => state.application.selectedId)
    yield put({
      type: 'UPDATE_FORM',
      payload: {
        id,
        key: `${prefix}_firstName`,
        value: data.firstName
      }
    })
  }
}

function condition(action) {
  return action.type === 'UPDATE_FORM' &&
    action.payload.key.includes('_IdNo')
}

function* customerWatcher() {
  yield takeLatest(condition, fetchCustomerWorker)
}

export default customerWatcher
