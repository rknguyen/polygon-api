// Not complete
// Notes: Can not upload image to Polygon

import { ProblemStatementResource } from '../../entities/interfaces/ProblemStatementResource'
import { requestAPI } from '../init-requester/requestAPI'

async function saveStatementResource(
  problemId: string,
  { checkExisting, name, file }: ProblemStatementResource
) {
  let params = JSON.parse(
    JSON.stringify({
      problemId,
      checkExisting,
      name
    })
  )
  params = { ...params, file }
  const { body } = await requestAPI('problem.saveStatementResource', params)
  console.log(body)
  return body && body.status === 'OK'
}

export { saveStatementResource }
