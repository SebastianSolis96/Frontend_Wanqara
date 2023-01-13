
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import './router.css';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch]);

    if( checking ){
        return (
            <div className='container-loading'>
                <i className="fa fa-circle-o-notch fa-spin fa-3x loading"></i>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } 
                />

                <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } 
                />

            </Routes>
        </BrowserRouter>
    )
}