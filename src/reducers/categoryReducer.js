import { types } from "../types/types";

const initialState = {
    categoryList: null,
}

export const categoryReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.categoryList:
            return {
                ...state,
                categoryList: action.payload
            }
    
        default:
            return state;
    }

}