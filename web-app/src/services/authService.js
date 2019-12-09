import jwtDecode from 'jwt-decode';

import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/token/';
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
  const { data: jwt } = await http.post(apiEndPoint, { username, password});
  localStorage.setItem(tokenKey, jwt['access']);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  logout, 
  getCurrentUser,
  loginWithJwt,
  getJwt
};