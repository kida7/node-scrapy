export interface Filter {
    name: string;
    args: string[];
}
export interface QueryObject {
    selector: string;
    getter: string;
    filters: Array<Filter>;
}
export declare function parseQuery(query: string): QueryObject;
