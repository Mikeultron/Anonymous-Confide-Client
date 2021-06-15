import { appActiveConfig } from "../appConfig";

const apiEndpoints = {
  register: `${appActiveConfig.api.baseurl}/authentication/register`,
  login: `${appActiveConfig.api.baseurl}/authentication/login`,
  getProfile: `${appActiveConfig.api.baseurl}/profile`,
  renewToken: `${appActiveConfig.api.baseurl}/token`,
};

export { apiEndpoints };
