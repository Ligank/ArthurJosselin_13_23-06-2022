import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../service/authenticationService';

import * as types from '../actions'

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response }),
      console.log(response)
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}