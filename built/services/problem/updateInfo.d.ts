import { ProblemInfo } from '../../entities/interfaces/ProblemInfo';
declare function updateInfo(problemId: string, { inputFile, outputFile, interactive, timeLimit, memoryLimit }?: ProblemInfo): Promise<boolean>;
export { updateInfo };
