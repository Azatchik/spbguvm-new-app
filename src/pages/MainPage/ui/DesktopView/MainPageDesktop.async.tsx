import { lazy } from 'react';

export const MainPageDesktopAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./MainPageDesktop')), 4000);
}));
