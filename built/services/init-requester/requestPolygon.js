"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requester_1 = require("../../utils/requester");
const account_1 = require("../../configs/account");
const login_1 = require("../authentication/login");
const logger_1 = require("../../utils/logger");
const makeRequestPolygon = (async () => {
    let options = {
        cookie: '',
        ccid: ''
    };
    const restRequest = await login_1.loginToPolygon(account_1.polygonAccount
    // @ts-ignore
    ).then(({ cookie, ccid }) => {
        options.ccid = ccid;
        options.cookie = cookie;
        return requester_1.makeDefaultRequester(options);
    });
    return {
        requestPolygon: await restRequest('problems').then((r) => {
            logger_1.logger('Logged in Codeforces Polygon');
            const cookie = [r.headers['set-cookie'], options.cookie].join('; ');
            return requester_1.makeDefaultRequester({
                ccid: options.ccid,
                cookie: cookie
            });
        })
    };
})();
exports.makeRequestPolygon = makeRequestPolygon;
