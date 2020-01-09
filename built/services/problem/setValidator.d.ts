import { ProblemValidator } from '../../entities/interfaces/ProblemValidator';
declare function setValidator(problemId: string, { validator }: ProblemValidator): Promise<boolean>;
export { setValidator };
