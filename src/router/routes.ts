export type Routes = {
    path: string;
    name: string;
    component: any;
    meta?: {
        title?: string;
        metaTags?: {
            name: string;
            content: string;
        }[];
    };
}[];
