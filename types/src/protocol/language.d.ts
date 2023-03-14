import { LanguageId } from './deployment.js';
interface Language {
    tag: string;
    displayName: string;
    hexColor: string;
    fileExtRegex: RegExp;
    runnerName?: string;
    runnerFilesRegexes: RegExp[];
}
export declare const Languages: Record<LanguageId, Language>;
export declare const DisplayNameToLanguageId: Record<string, LanguageId>;
export declare const RunnerToDisplayName: (runner: string) => string;
export {};
