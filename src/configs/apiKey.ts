import { APIKey } from '../entities/APIKey'

import dotenv from 'dotenv'
dotenv.config()

const apiKey: APIKey = {
  key: process.env.key as string,
  secret: process.env.secret as string
}

export { apiKey }
