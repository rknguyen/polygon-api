import { ProblemSolution } from '../../entities/interfaces/ProblemSolution'
import { requestAPI } from '../init-requester/requestAPI'

async function saveSolution(
  problemId: string,
  { checkExisting, name, file, sourceType, tag }: ProblemSolution
) {
  const params = JSON.parse(
    JSON.stringify({
      problemId,
      checkExisting,
      name,
      file,
      sourceType,
      tag
    })
  )
  const { body } = await requestAPI('problem.saveSolution', params)
  return body && body.status === 'OK'
}

export { saveSolution }
