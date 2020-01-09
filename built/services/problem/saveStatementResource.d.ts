import { ProblemStatementResource } from '../../entities/interfaces/ProblemStatementResource';
declare function saveStatementResource(problemId: string, { checkExisting, name, file }: ProblemStatementResource): Promise<boolean>;
export { saveStatementResource };
