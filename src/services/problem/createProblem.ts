import { makeRequestPolygon } from '../init-requester/requestPolygon'

async function createProblem(problemName: string) {
  const { requestPolygon } = await makeRequestPolygon
  const formData = {
    name: problemName,
    submit: 'Create',
    submitted: 'true'
  }

  const response = await requestPolygon('cp', { formData })
  return {
    success: response.headers.location.indexOf('/problems') !== -1
  }
}

export { createProblem }
