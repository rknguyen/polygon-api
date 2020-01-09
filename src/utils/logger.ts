import dotenv from 'dotenv'
dotenv.config()

function logger(msg: string, { error }: { error: boolean } = { error: false }) {
  if (!process.env.isProd) {
    return error ? console.error(msg) : console.log(msg)
  }
}

export { logger }
