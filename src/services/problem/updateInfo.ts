import { ProblemInfo } from '../../entities/interfaces/ProblemInfo'
import { requestAPI } from '../init-requester/requestAPI'

async function updateInfo(
  problemId: string,
  {
    inputFile,
    outputFile,
    interactive,
    timeLimit,
    memoryLimit
  }: ProblemInfo = {}
) {
  const params = JSON.parse(
    JSON.stringify({
      inputFile,
      outputFile,
      interactive,
      timeLimit,
      memoryLimit,
      problemId
    })
  )
  const { body } = await requestAPI('problem.updateInfo', params)
  return body && body.status === 'OK'
}

export { updateInfo }
