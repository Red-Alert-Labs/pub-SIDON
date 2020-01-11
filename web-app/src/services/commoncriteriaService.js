import http from "./httpService";

const apiEndPoint =  "/commoncriteria/";

function commoncriteriaUrl(commoncriteriaId) {
  return `${apiEndPoint}/${commoncriteriaId}`;
}
export function getCommonCriterias() {
  return http.get(apiEndPoint);
}
export function deleteCommonCriteria(commoncriteriaId) {
  return http.delete(commoncriteriaUrl(commoncriteriaId));
}

export function getCommonCriteria(commoncriteriaId) {
  return http.get(commoncriteriaUrl(commoncriteriaId));
}

export function saveCommonCriteria(commoncriteriaId) {
  if (commoncriteriaId.id) {
    const body = { ...commoncriteriaId };
    delete body.id;
    return http.put(commoncriteriaUrl(commoncriteriaId.id), body);
  }
  return http.post(apiEndPoint, commoncriteriaId);
}
