import { lazy } from 'react';

export const MainPageSmallScreenAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./MainPageSmallScreen')), 4000);
}));
