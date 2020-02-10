import http from "./httpService";

const apiEndPoint = "/scans";

function uniqueUrl(id) {
  return `${apiEndPoint}${id}/`;
}

export function getScans() {
  return http.get(apiEndPoint);
}

export function deleteScan(scanID) {
  return http.delete(uniqueUrl(scanID));
}

export function getScan(scanID) {
  return http.get(uniqueUrl(scanID));
}

function saveScan(scan) {
  if (scan.id) {
    const body = { ...scan };
    delete body.id;
    return http.put(uniqueUrl(scan.id), body);
  }
  return http.post(apiEndPoint, scan);
}
