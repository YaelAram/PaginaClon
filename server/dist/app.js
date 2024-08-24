"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const credentials_1 = require("./v1/routes/credentials");
const app = (0, express_1.default)();
const PORT = 8080;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Rutas V1
app.use('/api/v1/credentials', credentials_1.credentialsRouter);
app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}/api/v1/`));
