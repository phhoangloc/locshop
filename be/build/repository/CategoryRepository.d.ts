export declare class CategoryRepository {
    find(query: any): Promise<{
        id: number;
        archive: string;
        name: string;
    }[]>;
    findFirst(params: any): Promise<{
        id: number;
        archive: string;
        name: string;
    } | null>;
    create(body: any): Promise<{
        id: number;
        archive: string;
        name: string;
    }>;
    update(id: number, body: any): Promise<{
        id: number;
        archive: string;
        name: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        archive: string;
        name: string;
    }>;
}
//# sourceMappingURL=CategoryRepository.d.ts.map