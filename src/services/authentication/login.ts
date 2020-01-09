import { makeDefaultRequester } from '../../utils/requester'
import { Account } from '../../entities/Account'
import { extractCCID } from '../../utils/ccid'
import { logger } from '../../utils/logger'
import { URLSearchParams } from 'url'

const request = makeDefaultRequester()

async function loginToPolygon(account: Account) {
  logger('Login to Codeforces Polygon...')

  const { ccid } = await request('login').then((r) => extractCCID(r.body))
  if (!ccid) return false

  const { username: login, password } = account
  const formData = {
    ccid,
    login,
    password,
    submit: 'Login',
    submitted: 'true',
    fp: 'a92fdda7ac4f88ec7f7a8b28231cdd04'
  }

  const { body, headers } = await request('login', { formData })
  if (body) {
    logger('Invalid credentials!', { error: true })
    return process.exit(1)
  }

  const { location } = headers
  const locationQuery = new URLSearchParams(
    location.slice(location.indexOf('?') + 1)
  )

  return {
    ccid: locationQuery.get('ccid'),
    cookie: headers['set-cookie'].join('; ')
  }
}

export { loginToPolygon }
