/*
  Problem Statement Resource:
  checkExisting: if true, only add files is allowed
  name: file name
  file: file content
*/

import { Stream } from 'stream'

export interface ProblemStatementResource {
  checkExisting?: boolean
  name: string
  file: Stream | string
}
