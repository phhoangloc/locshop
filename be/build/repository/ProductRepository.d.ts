export declare class ProductRepository {
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
    update(id: number, body: any): Promise<{
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
    delete(id: number, body: any): Promise<{
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
//# sourceMappingURL=ProductRepository.d.ts.map