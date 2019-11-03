import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../utils/constants';
import {
  GET_ALL_USER_LIST,
  GET_ALL_USER_LIST_SUCCESS,
  GET_ALL_USER_LIST_ERROR,
} from './constants';

const initialState = {
  phase: INIT,
  userList: [],
};


/**
   * userList Reducer
   * @param {Object} state
   * @param {Object} action
   */
export function userListStore(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_LIST:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_ALL_USER_LIST_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        userList: action.data.users,
      };
    case GET_ALL_USER_LIST_ERROR:
      return {
        ...state,
        phase: ERROR,
        error: action.error,
      };
    default:
      return state;
  }
}

/* Actions */

/**
   * Get userList Action
   */
export const getUserList = () => ({
  type: GET_ALL_USER_LIST,
});
