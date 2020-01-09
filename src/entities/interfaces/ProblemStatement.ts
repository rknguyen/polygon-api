/*
  Problem Statement:
  lang: Language of statement (english for Englist, vietnamese for Vietnamese)
  encoding: statement's encoding, UTF-8 for default
  name: problem's name in statement's language
  legend: problem's description
  input: problem's input format
  output: problen's output format
  notes: problem's notes
  tutorial: problem's tutorial
  scoring: problem's scoring description
*/

export interface ProblemStatement {
  lang: string
  encoding?: string
  name?: string
  legend?: string
  input?: string
  output?: string
  notes?: string
  tutorial?: string
}
