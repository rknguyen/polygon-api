/// <reference types="node" />
import { Stream } from 'stream';
export interface ProblemStatementResource {
    checkExisting?: boolean;
    name: string;
    file: Stream | string;
}
