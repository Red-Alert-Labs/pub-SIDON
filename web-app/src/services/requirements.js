import http from './httpService';

const apiEndPoint = "/requirements/";

function requirementURL(requirementID) {
  return `${apiEndPoint}${requirementID}/`;
}

export function getRequirements() {
  return http.get(apiEndPoint);
}

export function deleteRequirement(requirementID) {
  return http.delete(requirementURL(requirementID));
}

export function getRequirement(requirementID) {
  return http.get(requirementURL(requirementID));
}

export function saveRequirement(requirement) {
  if (requirement.id) {
    const body = { ...requirement };
    delete body.id;
    return http.put(requirementURL(requirement.id), body);
  }
  return http.post(apiEndPoint, requirement);
}