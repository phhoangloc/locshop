export declare class ProductService {
    find(query: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string;
        images: string;
        affiliateUrl: string;
        price: string;
    }[]>;
    findFirst(params: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string;
        images: string;
        affiliateUrl: string;
        price: string;
    } | null>;
    create(body: any): Promise<{
        id: number;
        archive: string;
        createdAt: Date;
        name: string;
        slug: string;
        keyword: string;
        description: string;
        content: string;
        images: string;
        affiliateUrl: string;
        price: string;
    }>;
}
//# sourceMappingURL=ProductService.d.ts.map