import { ProblemSolutionTag } from '../enums/ProblemSolutionTag';
export interface ProblemSolution {
    checkExisting?: boolean;
    name: string;
    file: string;
    sourceType?: string;
    tag: ProblemSolutionTag;
}
