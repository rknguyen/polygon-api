import { ProblemStatement } from '../../entities/interfaces/ProblemStatement'
import { requestAPI } from '../init-requester/requestAPI'

async function saveStatement(
  problemId: string,
  {
    lang,
    encoding,
    name,
    legend,
    input,
    output,
    notes,
    tutorial
  }: ProblemStatement = { lang: 'vietnamese' }
) {
  const params = JSON.parse(
    JSON.stringify({
      problemId,
      lang,
      encoding,
      name,
      legend,
      input,
      output,
      notes,
      tutorial
    })
  )
  const { body } = await requestAPI('problem.saveStatement', params)
  console.log(body)
  return body && body.status === 'OK'
}

export { saveStatement }
