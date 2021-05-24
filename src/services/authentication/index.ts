import API from "configs/api";
import { IPayload } from "utils/interfaces";

export const login = (payload: any) => {
  return new Promise((resolve, reject) => {
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

export const register = (payload: any) => {
  return new Promise((resolve, reject) => {
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
