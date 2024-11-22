const { ADD_FILTER, REMOVE_FILTER, CLEARE_FILTER } = require("./filter-actions");

export const filtersReducer = (state = [], action) => {
    switch(action.type){
        case (ADD_FILTER): {
            if(state.includes(action.filter)) return state;
            return [...state, action.filter]
        }
        case (REMOVE_FILTER): {
            return state.filter(item => item !== action.filter)
        }
        case (CLEARE_FILTER): {
            return []
        }
        default: {
            return state
        }
    }
}