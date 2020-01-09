import crypto from 'crypto'
import { URLSearchParams } from 'url'
import request from 'request-promise'
import { APIKey } from '../entities/APIKey'

const baseRequester = request.defaults({
  baseUrl: 'https://polygon.codeforces.com/',
  json: true,
  simple: false,
  resolveWithFullResponse: true
})

function makeQueryString(query: any) {
  let queryString = ''
  let keys = Object.keys(query).sort()
  for (const key of keys) {
    queryString += `&${key}=${query[key]}`
  }
  return queryString.slice(1)
}

function makeApiSig(methodName: string, query: any, secret: string) {
  const rand = Math.random()
    .toString(36)
    .substring(2, 8)
  return (
    rand +
    crypto
      .createHash('sha512')
      .update(`${rand}/${methodName}?${query}#${secret}`, 'utf8')
      .digest('hex')
  )
}

function makeRequesterOnCredential(apiKey: APIKey) {
  return async function makeRequest(
    methodName: string = '',
    params?: object
  ): Promise<any> {
    let formData: any = {
      apiKey: apiKey.key,
      time: Math.round(new Date().getTime() / 1000).toString()
    }

    if (params) {
      for (let [key, value] of Object.entries(params)) {
        formData[key] = value
      }
    }

    formData['apiSig'] = makeApiSig(
      methodName,
      makeQueryString(formData),
      apiKey.secret
    )

    return baseRequester.post(`api/${methodName}`, { formData })
  }
}

function makeDefaultRequester({
  cookie,
  ccid
}: {
  cookie?: string
  ccid?: string
} = {}) {
  return async function makeRequest(
    methodName: string = '',
    { formData, params }: { formData?: object; params?: object } = {}
  ): Promise<any> {
    const query = new URLSearchParams()
    if (ccid) {
      query.append('ccid', ccid)
      if (formData) {
        formData = { ...formData, ccid }
      }
    }

    if (params) {
      for (let [key, value] of Object.entries(params)) {
        query.append(key, value)
      }
    }

    const endpoint = `${methodName}?${makeQueryString(query)}`
    const headers = {
      cookie,
      origin: 'https://polygon.codeforces.com',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
    }

    const options = { headers }
    return formData
      ? baseRequester.post(endpoint, options).form(formData)
      : baseRequester.get(endpoint, options)
  }
}

export { makeRequesterOnCredential, makeDefaultRequester }
