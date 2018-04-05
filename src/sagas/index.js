import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../config/constants'
import { put, takeEvery } from 'redux-saga/effects'
import userLoginApi from '../services/api'

const userLogin = function* userLogin (action) {
  try {
    const data = yield userLoginApi(action.payload.email, action.payload.password)
    yield put({ type: USER_LOGIN_SUCCESS, data })
  } catch (e) {
    yield put({ type: USER_LOGIN_FAILURE })
  }
}

const dataSaga = function* dataSaga () {
  yield takeEvery(USER_LOGIN, userLogin)
}

export default dataSaga