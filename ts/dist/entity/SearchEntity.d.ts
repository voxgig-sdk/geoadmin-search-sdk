import { GeoadminSearchEntityBase } from '../GeoadminSearchEntityBase';
import type { GeoadminSearchSDK } from '../GeoadminSearchSDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../GeoadminSearchTypes';
declare class SearchEntity extends GeoadminSearchEntityBase<Search> {
    constructor(client: GeoadminSearchSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
