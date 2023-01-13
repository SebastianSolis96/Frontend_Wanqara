import { Route, Routes } from 'react-router';
import { CategoryScreen } from '../components/category/CategoryScreen';

import { HomeScreen } from '../components/products/HomeScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <HomeScreen />
                } />

                <Route path="category" element={
                    <CategoryScreen />
                } />

                <Route path="/*" element={<HomeScreen />} />
            </Routes>
        </>
    )
}