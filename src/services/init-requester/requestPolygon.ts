import { makeDefaultRequester } from '../../utils/requester'

import { polygonAccount } from '../../configs/account'
import { loginToPolygon } from '../authentication/login'
import { logger } from '../../utils/logger'

const makeRequestPolygon = (async () => {
  let options = {
    cookie: '',
    ccid: ''
  }

  const restRequest = await loginToPolygon(
    polygonAccount
    // @ts-ignore
  ).then(({ cookie, ccid }) => {
    options.ccid = ccid
    options.cookie = cookie
    return makeDefaultRequester(options)
  })
  return {
    requestPolygon: await restRequest('problems').then((r) => {
      logger('Logged in Codeforces Polygon')
      const cookie = [r.headers['set-cookie'], options.cookie].join('; ')
      return makeDefaultRequester({
        ccid: options.ccid,
        cookie: cookie
      })
    })
  }
})()

export { makeRequestPolygon }
