"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const url_1 = require("url");
const request_promise_1 = __importDefault(require("request-promise"));
const baseRequester = request_promise_1.default.defaults({
    baseUrl: 'https://polygon.codeforces.com/',
    json: true,
    simple: false,
    resolveWithFullResponse: true
});
function makeQueryString(query) {
    let queryString = '';
    let keys = Object.keys(query).sort();
    for (const key of keys) {
        queryString += `&${key}=${query[key]}`;
    }
    return queryString.slice(1);
}
function makeApiSig(methodName, query, secret) {
    const rand = Math.random()
        .toString(36)
        .substring(2, 8);
    return (rand +
        crypto_1.default
            .createHash('sha512')
            .update(`${rand}/${methodName}?${query}#${secret}`, 'utf8')
            .digest('hex'));
}
function makeRequesterOnCredential(apiKey) {
    return async function makeRequest(methodName = '', params) {
        let formData = {
            apiKey: apiKey.key,
            time: Math.round(new Date().getTime() / 1000).toString()
        };
        if (params) {
            for (let [key, value] of Object.entries(params)) {
                formData[key] = value;
            }
        }
        formData['apiSig'] = makeApiSig(methodName, makeQueryString(formData), apiKey.secret);
        return baseRequester.post(`api/${methodName}`, { formData });
    };
}
exports.makeRequesterOnCredential = makeRequesterOnCredential;
function makeDefaultRequester({ cookie, ccid } = {}) {
    return async function makeRequest(methodName = '', { formData, params } = {}) {
        const query = new url_1.URLSearchParams();
        if (ccid) {
            query.append('ccid', ccid);
            if (formData) {
                formData = Object.assign(Object.assign({}, formData), { ccid });
            }
        }
        if (params) {
            for (let [key, value] of Object.entries(params)) {
                query.append(key, value);
            }
        }
        const endpoint = `${methodName}?${makeQueryString(query)}`;
        const headers = {
            cookie,
            origin: 'https://polygon.codeforces.com',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
        };
        const options = { headers };
        return formData
            ? baseRequester.post(endpoint, options).form(formData)
            : baseRequester.get(endpoint, options);
    };
}
exports.makeDefaultRequester = makeDefaultRequester;
