import ProblemChecker from '../../entities/interfaces/ProblemChecker';
declare function setChecker(problemId: string, { checker }: ProblemChecker): Promise<boolean>;
export { setChecker };
