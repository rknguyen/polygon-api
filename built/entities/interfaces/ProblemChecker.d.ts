import { ProblemCheckerName } from '../enums/ProblemCheckerName';
export default interface ProblemChecker {
    checker: ProblemCheckerName | string;
}
