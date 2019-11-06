import {
  takeLatest, call, put,
} from 'redux-saga/effects';
import {
  GET_ALL_USER_LIST,
  GET_ALL_USER_LIST_SUCCESS,
  GET_ALL_USER_LIST_ERROR,
} from './constants';
import { getAllUser } from './api';

/**
   * from GET_All_USER
   */
function* getUserSaga() {
  try {
    const { body } = yield call(getAllUser);
    yield put({ type: GET_ALL_USER_LIST_SUCCESS, data: body });
  } catch (error) {
    yield put({ type: GET_ALL_USER_LIST_ERROR, error });
  }
}


/**
   * Get User Saga
   */
export function* getAllUserSaga() {
  yield takeLatest(GET_ALL_USER_LIST, getUserSaga);
}
