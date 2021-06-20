import API from "configs/api";
import { encryptAndStoreData, IRenewTokenData } from "utils";
import { ILoginData, IPayload, IPromiseResult, IRegisterData } from "utils";

export const login = (payload: ILoginData) => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    const data: IPayload = {
      body: payload,
    };

    API.login(data)
      .then((res) => {
        const { token, refreshToken } = res?.data;
        encryptAndStoreData(
          token,
          "access_token",
          process.env.REACT_APP_TOKEN_PASSWORD!
        );
        encryptAndStoreData(
          refreshToken,
          "refresh_token",
          process.env.REACT_APP_REFRESH_TOKEN_PASSWORD!
        );
        resolve({ success: true, data: res });
      })
      .catch((err) => {
        reject({ success: false, data: err });
      });
  });
};

export const register = (payload: IRegisterData) => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    const data: IPayload = {
      body: payload,
    };

    API.register(data)
      .then((res) => {
        resolve({ success: true, data: res });
      })
      .catch((err) => {
        reject({ success: false, data: err });
      });
  });
};

export const renewToken = (payload: IRenewTokenData) => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    const data: IPayload = {
      body: payload,
    };

    API.renewToken(data)
      .then((res) => {
        resolve({ success: true, data: res });
      })
      .catch((err) => {
        reject({ success: false, data: err });
      });
  });
};
