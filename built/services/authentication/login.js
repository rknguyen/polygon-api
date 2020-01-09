"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requester_1 = require("../../utils/requester");
const ccid_1 = require("../../utils/ccid");
const logger_1 = require("../../utils/logger");
const url_1 = require("url");
const request = requester_1.makeDefaultRequester();
async function loginToPolygon(account) {
    logger_1.logger('Login to Codeforces Polygon...');
    const { ccid } = await request('login').then((r) => ccid_1.extractCCID(r.body));
    if (!ccid)
        return false;
    const { username: login, password } = account;
    const formData = {
        ccid,
        login,
        password,
        submit: 'Login',
        submitted: 'true',
        fp: 'a92fdda7ac4f88ec7f7a8b28231cdd04'
    };
    const { body, headers } = await request('login', { formData });
    if (body) {
        logger_1.logger('Invalid credentials!', { error: true });
        return process.exit(1);
    }
    const { location } = headers;
    const locationQuery = new url_1.URLSearchParams(location.slice(location.indexOf('?') + 1));
    return {
        ccid: locationQuery.get('ccid'),
        cookie: headers['set-cookie'].join('; ')
    };
}
exports.loginToPolygon = loginToPolygon;
