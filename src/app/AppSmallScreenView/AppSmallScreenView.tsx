import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterSmallScreen } from 'app/providers/router';
import { HeaderSmallScreen } from 'widgets/Header';
import { FooterSmallScreen } from 'widgets/Footer';

const AppSmallScreenView = () => {
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
        * {
            -webkit-tap-highlight-color: transparent;
        }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    return (
        <div className={classNames('app_small-screen', {}, [])}>
            <HeaderSmallScreen />
            <AppRouterSmallScreen />
            <FooterSmallScreen />
        </div>
    );
};

export default AppSmallScreenView;
