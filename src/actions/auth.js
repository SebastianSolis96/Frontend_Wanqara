import Swal from 'sweetalert2';

import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startChecking = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
    
            dispatch( login({
                uid: body.user,
                name: body.name
            }) );
        }else{
            dispatch( checkingFinish() );
        }

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const startLogin = ( user, pass ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/login', { user, pass }, 'POST' );
        const body = await resp.json();
        
        if( body.ok ){
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );
        }else{
            Swal.fire('Error', body.msg, 'error');
        }

    }
}