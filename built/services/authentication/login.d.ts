import { Account } from '../../entities/Account';
declare function loginToPolygon(account: Account): Promise<false | {
    ccid: string | null;
    cookie: any;
}>;
export { loginToPolygon };
