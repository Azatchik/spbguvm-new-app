import React, { Suspense, useEffect, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Views } from 'app/types/views';
import { AppDesktopViewAsync as AppDesktopView } from './AppDesktopView/AppDesktopView.async';
import { AppSmallScreenViewAsync as AppSmallScreenView } from './AppSmallScreenView/AppSmallScreenView.async';
import { AppMobileViewAsync as AppMobileView } from './AppMobileView/AppMobileView.async';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const [view, setView] = useState<Views>();

    useEffect(() => {
        const initialWidth = window.innerWidth;

        if (initialWidth >= 1615) {
            setView(Views.DESKTOP);
        } else if (initialWidth >= 775) {
            setView(Views.SMALL_SCREEN);
        } else {
            setView(Views.MOBILE);
        }
    }, []);

    useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    if (view === Views.DESKTOP) {
        return (
            <Suspense fallback="">
                <AppDesktopView />
            </Suspense>
        );
    }
    if (view === Views.SMALL_SCREEN) {
        return (
            <Suspense fallback="">
                <AppSmallScreenView />
            </Suspense>
        );
    }
    if (view === Views.MOBILE) {
        return (
            <Suspense fallback="">
                <AppMobileView />
            </Suspense>
        );
    }

    return null;
}

export default App;
