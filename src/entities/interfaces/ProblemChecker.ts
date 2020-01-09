/*
  Problem Checker:
  checker: name of the checker or source file
*/

import { ProblemCheckerName } from '../enums/ProblemCheckerName'

export default interface ProblemChecker {
  checker: ProblemCheckerName | string
}
