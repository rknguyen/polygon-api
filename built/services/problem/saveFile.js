"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function saveFile(problemId, { checkExisting, type, name, file, sourceType }) {
    const params = JSON.parse(JSON.stringify({
        problemId,
        checkExisting,
        type,
        name,
        file,
        sourceType
    }));
    const { body } = await requestAPI_1.requestAPI('problem.saveFile', params);
    return body && body.status === 'OK';
}
exports.saveFile = saveFile;
