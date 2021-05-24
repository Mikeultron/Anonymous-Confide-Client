import apiRequest from "./config";
import { apiEndpoints } from "./url";

const API = {
  register: apiRequest.post(apiEndpoints.register),
  login: apiRequest.post(apiEndpoints.login),
};

// *** Authentication ***

export default API;
