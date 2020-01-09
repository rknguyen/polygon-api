import { APIKey } from '../entities/APIKey';
declare function makeRequesterOnCredential(apiKey: APIKey): (methodName?: string, params?: object | undefined) => Promise<any>;
declare function makeDefaultRequester({ cookie, ccid }?: {
    cookie?: string;
    ccid?: string;
}): (methodName?: string, { formData, params }?: {
    formData?: object | undefined;
    params?: object | undefined;
}) => Promise<any>;
export { makeRequesterOnCredential, makeDefaultRequester };
