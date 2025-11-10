export declare const callAI: (body: {
    title: string;
    link: string;
}, images?: string[]) => Promise<string | undefined>;
export declare const callAIToMakeKeyword: (body: {
    title: string;
    content: string;
    link: string;
}) => Promise<string | undefined>;
export declare const callAIToMakeDescription: (body: {
    title: string;
    content: string;
    link: string;
}) => Promise<string | undefined>;
export declare const callAIToMakeImage: (body: {
    title: string;
    link: string;
}) => Promise<string[] | undefined>;
//# sourceMappingURL=autopost.d.ts.map