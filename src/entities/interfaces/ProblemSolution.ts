/*
  Problem Solution:
  checkExisting: if true, only adding solutions is allowed
  name: solution name
  file: solution content
  sourceType: ??:D
  tag: tag of the solution, ex: MA - main, OK, TL - Time limit,...
*/

import { ProblemSolutionTag } from '../enums/ProblemSolutionTag'

export interface ProblemSolution {
  checkExisting?: boolean
  name: string
  file: string
  sourceType?: string
  tag: ProblemSolutionTag
}
