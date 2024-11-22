import { combineReducers } from "redux";
import { positionsReducer } from "./postions/position-reducers";
import { filtersReducer } from "./filters/filter-reducers";

export const rootReducers = combineReducers({
    position: positionsReducer,
    filters: filtersReducer
});