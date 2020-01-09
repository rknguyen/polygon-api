"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function setValidator(problemId, { validator }) {
    const params = {
        problemId,
        validator
    };
    const { body } = await requestAPI_1.requestAPI('problem.setValidator', params);
    return body && body.status === 'OK';
}
exports.setValidator = setValidator;
