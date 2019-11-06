import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { getToken } from '../../utils/methods';

/**
 * Get All User List
 */
export const getAllUser = () => (
  axios({
    method: 'GET',
    url: `${API_URL}user`,
    headers: { 'Content-Type': 'application/json', 'x-auth-token': getToken() },
  })
);
