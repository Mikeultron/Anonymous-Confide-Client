import { appActiveConfig } from "../appConfig";

const apiEndpoints = {
  // *** Authentication Endpoints ***
  register: `${appActiveConfig.api.baseurl}/authentication/register`,
  login: `${appActiveConfig.api.baseurl}/authentication/login`,
};

export { apiEndpoints };
