export declare class UserService {
    find(query: any): Promise<{
        id: number;
        archive: string;
        username: string;
        password: string;
        email: string;
        active: boolean;
        position: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
    findFirst(params: any): Promise<{
        id: number;
        archive: string;
        username: string;
        password: string;
        email: string;
        active: boolean;
        position: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | null>;
    create(body: any): Promise<"this username is existed" | "this email is existed" | "your username must be equal or larger than 6 character" | "your password must be equal or larger than 6 character" | "your email is not valid" | "please check email to active account">;
    active(query: any): Promise<"this email is not existed" | "your account is active">;
    login(body: any): Promise<string>;
}
//# sourceMappingURL=UserService.d.ts.map