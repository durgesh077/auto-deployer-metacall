import { Request, Response } from "express";
export declare const createPackage: (req: Request, res: Response) => Promise<void>;
export declare const deploy: (req: Request, res: Response) => Promise<void>;
export declare const undeploy: (req: Request, res: Response) => Promise<void>;
export declare const getDeployments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
