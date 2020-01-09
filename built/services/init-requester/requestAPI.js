"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey_1 = require("../../configs/apiKey");
const requester_1 = require("../../utils/requester");
const requestAPI = requester_1.makeRequesterOnCredential(apiKey_1.apiKey);
exports.requestAPI = requestAPI;
