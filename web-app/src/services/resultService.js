import http from "./httpService";

const apiEndPoint = "/result/";

function uniqueUrl(id) {
  return `${apiEndPoint}${id}/`;
}

export function getResult(scanID) {
  return http.get(uniqueUrl(scanID));
}
