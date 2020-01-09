import { ProblemFileType } from '../enums/ProblemFileType';
export interface ProblemFile {
    checkExisting?: boolean;
    type: ProblemFileType;
    name: string;
    file: string;
    sourceType?: string;
}
