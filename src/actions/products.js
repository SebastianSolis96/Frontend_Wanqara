import Swal from 'sweetalert2';

import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startProductList = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken( 'product', {}, 'GET' );
        const body = await resp.json();
        if( body.ok ){
            dispatch( productsList( body.msg ) );
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

const productsList = ( productList ) => ({
    type: types.productList,
    payload: productList
});

export const startUpdateProduct = ( id, price ) => {
    return async( dispatch ) => {

        const resp = await fetchConToken( `product/edit/${ id }`, { price }, 'PUT' );
        const body = await resp.json();

        if( body.ok ){
            Swal.fire({
                title: "Updated!",  
                icon: "success",   
                showCancelButton: false,        
                confirmButtonText: "OK",   
                closeOnConfirm: false,   
                closeOnCancel: false,
                customClass: "Custom_Cancel"
            });
            dispatch( updateProduct( body.msg ) );
        }else{
            const { price } = body.errors || { 
                price: '', 
            };

            if( price && price !== '' )
                Swal.fire({
                    title: "Error",   
                    text: price.msg,   
                    icon: "error",   
                    showCancelButton: false,       
                    confirmButtonText: "OK",   
                    closeOnConfirm: false,   
                    closeOnCancel: false,
                    customClass: "Custom_Cancel"
                });
            else
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

const updateProduct = ( product ) => ({
    type: types.productUpdate,
    payload: product
});