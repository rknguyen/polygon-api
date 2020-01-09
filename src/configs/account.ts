import dotenv from 'dotenv'
import { Account } from '../entities/Account'
dotenv.config()

const polygonAccount: Account = {
  username: process.env.username as string,
  password: process.env.password as string
}

export { polygonAccount }
