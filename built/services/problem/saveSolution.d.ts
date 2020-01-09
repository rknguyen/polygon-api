import { ProblemSolution } from '../../entities/interfaces/ProblemSolution';
declare function saveSolution(problemId: string, { checkExisting, name, file, sourceType, tag }: ProblemSolution): Promise<boolean>;
export { saveSolution };
