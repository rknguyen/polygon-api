/*
  NOTES: CURRENTLY ONLY SUPPORT SOURCE

  Problem File:
  checkExisting: if true, only adding solutions is allowed
  type: file type (resouce/source or aux)
  name: file name
  file: file content
  sourceType: ??:D
*/

import { ProblemFileType } from '../enums/ProblemFileType'

export interface ProblemFile {
  checkExisting?: boolean
  type: ProblemFileType
  name: string
  file: string
  sourceType?: string
}
