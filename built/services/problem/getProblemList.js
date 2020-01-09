"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function getProblemList() {
    const { body } = await requestAPI_1.requestAPI('problems.list');
    return body.status === 'OK'
        ? body.result.map((p) => {
            return {
                id: p.id,
                name: p.name,
                owner: p.owner,
                modified: p.modified
            };
        })
        : [];
}
exports.getProblemList = getProblemList;
