"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractCCID(text) {
    const match = text.match(/name="ccid" content="(.*?)"/);
    return { ccid: match ? match[1] : null };
}
exports.extractCCID = extractCCID;
