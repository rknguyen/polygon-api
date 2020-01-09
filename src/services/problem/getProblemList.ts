import { requestAPI } from '../init-requester/requestAPI'

async function getProblemList() {
  const { body } = await requestAPI('problems.list')
  return body.status === 'OK'
    ? body.result.map((p: any) => {
        return {
          id: p.id,
          name: p.name,
          owner: p.owner,
          modified: p.modified
        }
      })
    : []
}

export { getProblemList }
