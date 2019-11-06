import { all } from 'redux-saga/effects';
import { getUserSaga } from './user/saga';
import { getAllUserSaga } from './listUser/saga';


export default function* rootSaga() {
  yield all([
    getUserSaga(),
    getAllUserSaga(),
  ]);
}
