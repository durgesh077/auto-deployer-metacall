import { AxiosError } from 'axios';
import { Create, Deployment, LogType, MetaCallJSON } from './deployment.js';
import { Plans } from './plan.js';
export declare const isProtocolError: (err: unknown) => boolean;
export { AxiosError as ProtocolError };
type SubscriptionMap = Record<string, number>;
export interface SubscriptionDeploy {
    id: string;
    plan: Plans;
    date: number;
    deploy: string;
}
export type ResourceType = 'Package' | 'Repository';
export interface AddResponse {
    id: string;
}
export interface Branches {
    branches: [string];
}
export interface API {
    refresh(): Promise<string>;
    validate(): Promise<boolean>;
    deployEnabled(): Promise<boolean>;
    listSubscriptions(): Promise<SubscriptionMap>;
    listSubscriptionsDeploys(): Promise<SubscriptionDeploy[]>;
    inspect(): Promise<Deployment[]>;
    upload(name: string, blob: unknown, jsons: MetaCallJSON[], runners: string[], type: string): Promise<string>;
    add(url: string, branch: string, jsons: MetaCallJSON[]): Promise<AddResponse>;
    deploy(name: string, env: {
        name: string;
        value: string;
    }[], plan: Plans, resourceType: ResourceType, release?: string, version?: string): Promise<Create>;
    deployDelete(prefix: string, suffix: string, version: string): Promise<string>;
    logs(container: string, type: LogType, suffix: string, prefix: string, version?: string): Promise<string>;
    branchList(url: string): Promise<Branches>;
    fileList(url: string, branch: string): Promise<string[]>;
}
declare const _default: (token: string, baseURL: string) => API;
export default _default;
