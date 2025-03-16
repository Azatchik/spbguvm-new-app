import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterSmallScreen } from 'app/providers/router';
import { HeaderSmallScreen } from 'widgets/Header';
import { FooterSmallScreen } from 'widgets/Footer';

const AppSmallScreenView = () => {
    return (
        <div className={classNames('app_small-screen', {}, [])}>
            <HeaderSmallScreen />
            <AppRouterSmallScreen />
            <FooterSmallScreen />
        </div>
    );
};

export default AppSmallScreenView;
