import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPageDesktop, MainPageMobile, MainPageSmallScreen } from 'pages/MainPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    // Админам
    ADMIN = 'admin',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*',
    // Админам
    [AppRoutes.ADMIN]: '/admin',
};

export const routeConfigDesktop: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageDesktop />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};

export const routeConfigSmallScreen: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageSmallScreen />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};

export const routeConfigMobile: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageMobile />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};
