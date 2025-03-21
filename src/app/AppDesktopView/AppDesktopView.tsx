import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterDesktop } from 'app/providers/router';
import { HeaderDesktop } from 'widgets/Header';
import { FooterDesktop } from 'widgets/Footer';

const AppDesktopView = () => {
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
        ::-webkit-scrollbar {
            width: 15px;
        }

        ::-webkit-scrollbar-track {
            background: white;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    return (
        <div className={classNames('app_desktop', {}, [])}>
            <HeaderDesktop />
            <AppRouterDesktop />
            <FooterDesktop />
        </div>
    );
};

export default AppDesktopView;
