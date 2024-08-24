"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreFromFile = exports.saveToFile = void 0;
const node_fs_1 = require("node:fs");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const crypto_1 = require("../helpers/crypto");
const saveToFile = (name, data) => {
    const path = `${(0, node_path_1.join)('data', name)}.txt`;
    const encryptedData = (0, crypto_1.encrypt)(JSON.stringify(data));
    (0, node_fs_1.writeFile)(path, `${encryptedData}`, { flag: 'a', encoding: 'utf8' }, (error) => {
        if (error)
            return console.error(error);
        console.log(`File created at ${path}`);
    });
};
exports.saveToFile = saveToFile;
const restoreFromFile = async (fileName) => {
    const path = `${(0, node_path_1.join)('data', fileName)}.txt`;
    try {
        const data = await (0, promises_1.readFile)(path, 'utf8');
        return { ok: true, data: (0, crypto_1.decrypt)(data) };
    }
    catch (err) {
        return {
            ok: false,
            data: err.message,
        };
    }
};
exports.restoreFromFile = restoreFromFile;
