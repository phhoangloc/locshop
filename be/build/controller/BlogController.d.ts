import { Request, Response } from "express";
interface CustomRequest extends Request {
    id?: number;
}
export declare class BlogController {
    find(req: Request, res: Response): Promise<void>;
    findBlog(req: Request, res: Response): Promise<void>;
    create(req: CustomRequest, res: Response): Promise<void>;
    update(req: CustomRequest, res: Response): Promise<void>;
    delete(req: CustomRequest, res: Response): Promise<void>;
}
export {};
//# sourceMappingURL=BlogController.d.ts.map