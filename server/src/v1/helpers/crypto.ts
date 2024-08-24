import { AES, enc } from "crypto-js";

const passPhrase = process.env.PASS_PHRASE!;

export const encrypt = (data: string) => {
  return AES.encrypt(data, passPhrase).toString();
};

export const decrypt = (cipherText: string) => {
  return AES.decrypt(cipherText, passPhrase).toString(enc.Utf8);
};
