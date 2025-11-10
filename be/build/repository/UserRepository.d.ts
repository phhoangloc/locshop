export declare class UserRepository {
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
    create(body: any): Promise<{
        id: number;
        archive: string;
        username: string;
        password: string;
        email: string;
        active: boolean;
        position: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    update(id: number, body: any): Promise<{
        id: number;
        archive: string;
        username: string;
        password: string;
        email: string;
        active: boolean;
        position: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        archive: string;
        username: string;
        password: string;
        email: string;
        active: boolean;
        position: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=UserRepository.d.ts.map