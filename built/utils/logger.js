"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function logger(msg, { error } = { error: false }) {
    if (!process.env.isProd) {
        return error ? console.error(msg) : console.log(msg);
    }
}
exports.logger = logger;
