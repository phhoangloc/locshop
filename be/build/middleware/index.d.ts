import { NextFunction, Request, Response } from "express";
interface CustomRequest extends Request {
    id?: number;
}
export declare class middleWare {
    position: string;
    constructor(position: string);
    checkPosition(req: CustomRequest, res: Response, next: NextFunction): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map