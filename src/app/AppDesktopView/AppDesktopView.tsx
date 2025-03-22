import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterDesktop } from 'app/providers/router';
import { HeaderDesktop } from 'widgets/Header';
import { FooterDesktop } from 'widgets/Footer';

const AppDesktopView = () => {
    return (
        <div className={classNames('app_desktop', {}, [])}>
            <HeaderDesktop />
            <AppRouterDesktop />
            <FooterDesktop />
        </div>
    );
};

export default AppDesktopView;
