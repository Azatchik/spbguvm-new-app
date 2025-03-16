import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppRoutesProps, routeConfigDesktop } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouterDesktop = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={<RequireAuth>{element}</RequireAuth>}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfigDesktop).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouterDesktop);
