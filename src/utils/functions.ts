import { AES, enc } from "crypto-js";
import { toast } from "react-toastify";
import { NotifyType } from "./types";

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

export const notify = (message: string, type: NotifyType) => {
  switch (type) {
    case "success":
      toast.success(`🙌 ${message}`);
      break;
    case "warning":
      toast.warning(`⚠️ ${message}`);
      break;
    case "error":
      toast.error(`❌ ${message}`);
      break;
    case "dark":
      toast.dark(`${message}`);
      break;
    case "info":
      toast.info(`ℹ️ ${message}`);
      break;
    default:
      toast(`${message}`);
      break;
  }
};
