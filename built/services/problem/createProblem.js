"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestPolygon_1 = require("../init-requester/requestPolygon");
async function createProblem(problemName) {
    const { requestPolygon } = await requestPolygon_1.makeRequestPolygon;
    const formData = {
        name: problemName,
        submit: 'Create',
        submitted: 'true'
    };
    const response = await requestPolygon('cp', { formData });
    return {
        success: response.headers.location.indexOf('/problems') !== -1
    };
}
exports.createProblem = createProblem;
