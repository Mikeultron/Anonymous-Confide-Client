import { AES, enc } from "crypto-js";

export const getAndDecryptData = (identifier: string, password: string) => {
  try {
    const key = btoa(identifier);
    const data = localStorage.getItem(key);
    if (data) {
      const bytes = AES.decrypt(data.toString(), password);
      const decrypted = bytes.toString(enc.Utf8);
      return decrypted;
    }
    return false;
  } catch (e) {
    throw e;
  }
};

export const encryptAndStoreData = (
  data: any,
  identifier: string,
  password: string
) => {
  try {
    const key = btoa(identifier);
    const cipherText = AES.encrypt(data, password).toString();
    localStorage.setItem(key, cipherText);
  } catch (e) {
    throw e;
  }
};
