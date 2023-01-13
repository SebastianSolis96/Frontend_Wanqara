import Swal from 'sweetalert2';

import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startCategoryList = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken( 'category', {}, 'GET' );
        const body = await resp.json();
        
        if( body.ok ){
            dispatch( categoriesList( body.msg ) );
        }else{
            Swal.fire({
                title: "Error",   
                text: body.msg,   
                icon: "error",   
                showCancelButton: false,        
                confirmButtonText: "OK",   
                closeOnConfirm: false,   
                closeOnCancel: false,
                customClass: "Custom_Cancel"
            });
        }

    }
}

const categoriesList = ( categoriesList ) => ({
    type: types.categoryList,
    payload: categoriesList
});