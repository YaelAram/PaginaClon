"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInfoSchema = exports.GoogleUserInfoSchema = void 0;
const valibot_1 = require("valibot");
exports.GoogleUserInfoSchema = (0, valibot_1.object)({
    email: (0, valibot_1.pipe)((0, valibot_1.string)('Email should be a string.'), (0, valibot_1.email)('Invalid email format.')),
    password: (0, valibot_1.string)('Password should be a string.'),
    otp: (0, valibot_1.pipe)((0, valibot_1.string)('OTP should be a string.'), (0, valibot_1.length)(6, 'Min length required: 6')),
});
exports.StudentInfoSchema = (0, valibot_1.object)({
    no: (0, valibot_1.pipe)((0, valibot_1.string)('Student ID should be a string.'), (0, valibot_1.regex)(/^[0-9]{9}$/, 'Must be 9 numbers')),
    password: (0, valibot_1.string)('Password should be a string.'),
});
