"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsRouter = void 0;
const express_1 = require("express");
const credentials_1 = require("../controllers/credentials");
const validateData_1 = require("../middlewares/validateData");
exports.credentialsRouter = (0, express_1.Router)();
exports.credentialsRouter.post('/google', [validateData_1.validateGoogleUserInfo], credentials_1.googleCredentials);
exports.credentialsRouter.post('/unam', [validateData_1.validateStudentInfo], credentials_1.studentCredentials);
exports.credentialsRouter.get('/query', credentials_1.queryCredentials);
