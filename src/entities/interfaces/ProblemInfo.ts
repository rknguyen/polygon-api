/*
  Problem Info:
  timeLimit: miliseconds
  inputFile: name of input file or stdin for default
  outputFile: name of output file or stdout for default
  memoryLimit: memory limit in MB
  interactive: is problem interactive
*/

export interface ProblemInfo {
  timeLimit?: number
  inputFile?: string
  outputFile?: string
  memoryLimit?: number
  interactive?: boolean
}
