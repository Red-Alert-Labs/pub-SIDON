import http from "./httpService";

const apiEndPoint =  "/commoncriteria/";

function commoncriteriaUrl(commoncriteriaId) {
  return `${apiEndPoint}${commoncriteriaId}/`;
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

export function saveCommonCriteria(commonCreteria) {
  if (commonCreteria.id) {
    const body = { ...commonCreteria };
    delete body.id;
    return http.put(commoncriteriaUrl(commonCreteria.id), body);
  }
  return http.post(apiEndPoint, commonCreteria);
}
