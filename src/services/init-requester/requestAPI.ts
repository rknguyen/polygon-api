import { apiKey } from '../../configs/apiKey'
import { makeRequesterOnCredential } from '../../utils/requester'

const requestAPI = makeRequesterOnCredential(apiKey)

export { requestAPI }
