// import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    productList: null,
}

export const productReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.productList:
            return {
                ...state,
                productList: action.payload
            }

        case types.productUpdate:
            return {
                ...state,
                productList: state.productList.map(
                    p => ( p.id === action.payload.id ) ? action.payload : p
                )
            };

        default:
            return state;
    }

}