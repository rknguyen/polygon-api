"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function updateInfo(problemId, { inputFile, outputFile, interactive, timeLimit, memoryLimit } = {}) {
    const params = JSON.parse(JSON.stringify({
        inputFile,
        outputFile,
        interactive,
        timeLimit,
        memoryLimit,
        problemId
    }));
    const { body } = await requestAPI_1.requestAPI('problem.updateInfo', params);
    return body && body.status === 'OK';
}
exports.updateInfo = updateInfo;
