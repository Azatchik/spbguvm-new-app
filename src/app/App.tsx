import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Header, HeaderTheme } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Header headerTheme={HeaderTheme.DARK} />
                <AppRouter />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
