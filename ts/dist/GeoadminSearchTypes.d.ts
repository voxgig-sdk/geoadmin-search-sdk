export interface Search {
    results?: any[];
}
export interface SearchLoadMatch {
    bbox?: string;
    callback?: string;
    feature?: string;
    geometry_format?: string;
    lang?: string;
    limit?: number;
    origin?: string;
    return_geometry?: boolean;
    search_text?: string;
    sortbbox?: boolean;
    sr?: string;
    type: string;
}
