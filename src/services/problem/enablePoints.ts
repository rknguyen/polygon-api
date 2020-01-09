import { requestAPI } from '../init-requester/requestAPI'

async function enablePoints(problemId: string, enable: boolean) {
  const params = {
    problemId,
    enable
  }
  const { body } = await requestAPI('problem.enablePoints', params)
  return body && body.status === 'OK'
}

export { enablePoints }
