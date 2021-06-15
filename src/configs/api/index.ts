import apiRequest from "./config";
import { apiEndpoints } from "./url";

const API = {
  register: apiRequest.post(apiEndpoints.register),
  login: apiRequest.post(apiEndpoints.login),
  getProfile: apiRequest.get(apiEndpoints.getProfile, true),
  renewToken: apiRequest.post(apiEndpoints.renewToken),
};

export default API;
