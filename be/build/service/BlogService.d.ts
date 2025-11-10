export declare class BlogService {
    find(query: any): Promise<({
        category: {
            name: string;
        };
    } & {
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string | null;
        affiliateUrl: string;
        hostId: number;
        infor: string | null;
        video: string | null;
        cover: string;
        categoryId: number;
        updateDate: Date;
    })[]>;
    findFirst(params: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string | null;
        affiliateUrl: string;
        hostId: number;
        infor: string | null;
        video: string | null;
        cover: string;
        categoryId: number;
        updateDate: Date;
    } | null>;
    create(body: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string | null;
        affiliateUrl: string;
        hostId: number;
        infor: string | null;
        video: string | null;
        cover: string;
        categoryId: number;
        updateDate: Date;
    }>;
    update(id: number, body: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string | null;
        affiliateUrl: string;
        hostId: number;
        infor: string | null;
        video: string | null;
        cover: string;
        categoryId: number;
        updateDate: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string | null;
        affiliateUrl: string;
        hostId: number;
        infor: string | null;
        video: string | null;
        cover: string;
        categoryId: number;
        updateDate: Date;
    }>;
}
//# sourceMappingURL=BlogService.d.ts.map