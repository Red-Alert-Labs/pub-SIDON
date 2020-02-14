import http from "./httpService";

const apiEndPoint = "/result/";

function uniqueUrl(id) {
  return `${apiEndPoint}${id}/`;
}

export function getResult(scanID) {
  return http.get(uniqueUrl(scanID));
}

export function addResult(payload) {
  return http.post(apiEndPoint, payload);
} 