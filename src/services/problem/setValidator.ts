import { ProblemValidator } from '../../entities/interfaces/ProblemValidator'
import { requestAPI } from '../init-requester/requestAPI'

async function setValidator(
  problemId: string,
  { validator }: ProblemValidator
) {
  const params = {
    problemId,
    validator
  }
  const { body } = await requestAPI('problem.setValidator', params)
  return body && body.status === 'OK'
}

export { setValidator }
