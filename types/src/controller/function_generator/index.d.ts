/// <reference types="node" />
import { Request, Response } from "express";
export declare const ask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | NodeJS.Timeout>;
