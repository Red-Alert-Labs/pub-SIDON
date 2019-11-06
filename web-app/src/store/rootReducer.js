import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userStore } from './user';
import { userListStore } from './listUser';


const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  userStore: persistReducer(persistConfig, userStore),
  userListStore,
});

export default rootReducer;
