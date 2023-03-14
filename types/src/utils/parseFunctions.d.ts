type Types = 'int' | 'float' | 'boolean' | 'list' | 'object' | 'string';
type parameter = [string, Types];
export type funcType = `${string}$$$$$$${string}`;
export interface ParsedFunctionInterface {
    function_def: string;
    name: string;
    parameter_names: parameter[];
}
export default function parseFunction(func: funcType): ParsedFunctionInterface;
export {};
