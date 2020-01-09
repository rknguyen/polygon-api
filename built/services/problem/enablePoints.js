"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function enablePoints(problemId, enable) {
    const params = {
        problemId,
        enable
    };
    const { body } = await requestAPI_1.requestAPI('problem.enablePoints', params);
    return body && body.status === 'OK';
}
exports.enablePoints = enablePoints;
