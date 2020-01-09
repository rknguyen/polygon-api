"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestAPI_1 = require("../init-requester/requestAPI");
async function saveStatement(problemId, { lang, encoding, name, legend, input, output, notes, tutorial } = { lang: 'vietnamese' }) {
    const params = JSON.parse(JSON.stringify({
        problemId,
        lang,
        encoding,
        name,
        legend,
        input,
        output,
        notes,
        tutorial
    }));
    const { body } = await requestAPI_1.requestAPI('problem.saveStatement', params);
    console.log(body);
    return body && body.status === 'OK';
}
exports.saveStatement = saveStatement;
