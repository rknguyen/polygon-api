"use strict";
// Not complete
// Notes: Can not upload image to Polygon
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function saveStatementResource(problemId, { checkExisting, name, file }) {
    let params = JSON.parse(JSON.stringify({
        problemId,
        checkExisting,
        name
    }));
    params = Object.assign(Object.assign({}, params), { file });
    const { body } = await requestAPI_1.requestAPI('problem.saveStatementResource', params);
    console.log(body);
    return body && body.status === 'OK';
}
exports.saveStatementResource = saveStatementResource;
