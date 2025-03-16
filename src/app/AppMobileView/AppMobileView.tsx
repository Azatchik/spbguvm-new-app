import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterMobile } from 'app/providers/router';
import { HeaderMobile } from 'widgets/Header';
import { FooterMobile } from 'widgets/Footer';

const AppMobileView = () => {
    return (
        <div className={classNames('app_mobile', {}, [])}>
            <HeaderMobile />
            <AppRouterMobile />
            <FooterMobile />
        </div>
    );
};

export default AppMobileView;
