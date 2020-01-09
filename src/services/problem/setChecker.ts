import ProblemChecker from '../../entities/interfaces/ProblemChecker'
import { requestAPI } from '../init-requester/requestAPI'

async function setChecker(problemId: string, { checker }: ProblemChecker) {
  const params = {
    problemId,
    checker
  }
  const { body } = await requestAPI('problem.setChecker', params)
  return body && body.status === 'OK'
}

export { setChecker }
