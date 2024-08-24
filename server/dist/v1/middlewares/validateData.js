"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStudentInfo = exports.validateGoogleUserInfo = void 0;
const valibot_1 = require("valibot");
const types_1 = require("../interfaces/types");
const validateGoogleUserInfo = (req, res, next) => {
    const { email, password, otp } = req.body;
    const info = (0, valibot_1.safeParse)(types_1.GoogleUserInfoSchema, { email, password, otp });
    if (!info.success) {
        return res
            .status(400)
            .json({ ok: false, issues: info.issues.map(({ message }) => message) });
    }
    next();
};
exports.validateGoogleUserInfo = validateGoogleUserInfo;
const validateStudentInfo = (req, res, next) => {
    const { no, password } = req.body;
    const info = (0, valibot_1.safeParse)(types_1.StudentInfoSchema, { no, password });
    if (!info.success) {
        return res
            .status(400)
            .json({ ok: false, issues: info.issues.map(({ message }) => message) });
    }
    next();
};
exports.validateStudentInfo = validateStudentInfo;
