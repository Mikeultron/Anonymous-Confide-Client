import API from "configs/api";
import {
  ILoginData,
  IPayload,
  IPromiseResult,
  IRegisterData,
} from "utils/interfaces";

export const login = (payload: ILoginData) => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    const data: IPayload = {
      body: payload,
    };

    API.login(data)
      .then((res) => {
        const token = res.data.token;
        console.log(token);
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
