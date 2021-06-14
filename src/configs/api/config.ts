import axios, { AxiosRequestConfig, Method } from "axios";
import { ILooseObject, IPayload, getAndDecryptData } from "utils";

/**
 * @name apiInstance
 * @description API instance dari axios untuk default config
 */

const apiInstance = axios.create({
  baseURL: "",
  timeout: 60000,
  validateStatus: (status) => status >= 200 && status < 300,
});

/**
 * @name ApiRequest
 * @description Kelas untuk handle api request
 */
class ApiRequest {
  static get(route: string, token = false) {
    return (payload: IPayload) => this.request("GET", route, payload, token);
  }

  static put(route: string, token = false) {
    return (payload: IPayload) => this.request("PUT", route, payload, token);
  }

  static post(route: string, token = false) {
    return (payload: IPayload) => this.request("POST", route, payload, token);
  }

  static delete(route: string, token = false) {
    return (payload: IPayload) => this.request("DELETE", route, payload, token);
  }

  static patch(route: string, token = false) {
    return (payload: IPayload) => this.request("PATCH", route, payload, token);
  }

  /**
   * @name resolveParams()
   * @param {*} params
   * @description untuk handle object params di konversi ke query params di url
   */
  static resolveParams(params: { [x: string]: any }) {
    const paramsResult: string[] = [];
    Object.keys(params).map((e) => paramsResult.push(`${e}=${params[e]}`));
    return paramsResult.join("&");
  }

  /**
   * @name request
   * @param {*} method
   * @param {*} route
   * @param {*} payload
   * @param {*} token
   * @description Method untuk handling call api
   */
  static async request(
    method: Method,
    route: string,
    payload: IPayload,
    token: boolean
  ) {
    const path = payload.path ? `/${payload.path}` : "";
    const params = payload.params
      ? `?${this.resolveParams(payload.params)}`
      : "";

    const customUrl = payload.url ? payload.url : "";

    const baseHeaders: ILooseObject = {
      "Content-Type":
        payload.type === "form-data"
          ? "multipart/form-data"
          : "application/json",
    };

    if (token) {
      const token = getAndDecryptData(
        "token",
        process.env.REACT_APP_TOKEN_PASSWORD ?? ""
      );
      baseHeaders.Authorization = `Bearer ${token || ""}`;
    }

    const requestPayload: AxiosRequestConfig = {
      url: customUrl.length > 0 ? customUrl : route + path + params,
      method,
      headers: payload.headers
        ? { ...baseHeaders, ...payload.headers }
        : baseHeaders,
      data: payload.body ? payload.body : {},
    };

    console.log(
      `REQUEST - ${requestPayload.method} - ${requestPayload.url}`,
      requestPayload
    );

    try {
      const response = await apiInstance.request(requestPayload);
      console.log(
        `RESPONSE SUCCESS - ${requestPayload.method} - ${requestPayload.url}`,
        response
      );
      return response;
    } catch (err) {
      console.log(
        `RESPONSE ERROR - ${requestPayload.method} - ${requestPayload.url}`,
        err
      );
      throw err;
    }
  }
}

export default ApiRequest;
