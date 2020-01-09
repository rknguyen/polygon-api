import { ProblemStatement } from '../../entities/interfaces/ProblemStatement';
declare function saveStatement(problemId: string, { lang, encoding, name, legend, input, output, notes, tutorial }?: ProblemStatement): Promise<boolean>;
export { saveStatement };
