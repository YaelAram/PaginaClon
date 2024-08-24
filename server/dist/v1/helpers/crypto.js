"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = require("crypto-js");
const passPhrase = process.env.PASS_PHRASE;
const encrypt = (data) => {
    return crypto_js_1.AES.encrypt(data, passPhrase).toString();
};
exports.encrypt = encrypt;
const decrypt = (cipherText) => {
    return crypto_js_1.AES.decrypt(cipherText, passPhrase).toString(crypto_js_1.enc.Utf8);
};
exports.decrypt = decrypt;
