import { ProblemFile } from '../../entities/interfaces/ProblemFile';
declare function saveFile(problemId: string, { checkExisting, type, name, file, sourceType }: ProblemFile): Promise<boolean>;
export { saveFile };
