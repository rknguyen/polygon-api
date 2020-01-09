import { ProblemFile } from '../../entities/interfaces/ProblemFile'
import { requestAPI } from '../init-requester/requestAPI'

async function saveFile(
  problemId: string,
  { checkExisting, type, name, file, sourceType }: ProblemFile
) {
  const params = JSON.parse(
    JSON.stringify({
      problemId,
      checkExisting,
      type,
      name,
      file,
      sourceType
    })
  )
  const { body } = await requestAPI('problem.saveFile', params)
  return body && body.status === 'OK'
}

export { saveFile }
