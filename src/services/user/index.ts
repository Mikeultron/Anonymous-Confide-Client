import API from "configs/api";
import { IPromiseResult } from "utils";

export const getProfile = () => {
  return new Promise<IPromiseResult>((resolve, reject) => {
    API.getProfile({})
      .then((res) => {
        resolve({ success: true, data: res });
      })
      .catch((err) => {
        reject({ success: false, data: err });
      });
  });
};
