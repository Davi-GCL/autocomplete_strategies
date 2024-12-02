import { Observable } from "rxjs";
import { INameFilter } from "./iname-filter";
import { IPaginationFilter } from "./ipagination-filter";

export interface AsyncFilterMethod {
    getByFilterAsync: (paginationFilter: IPaginationFilter, filter: INameFilter) => Observable<any>;
}