import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, useEffect, useMemo, useState,
} from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import burgerMenuLightActiveIcon from 'shared/assets/icons/burger-menu-light-active.svg';
import burgerMenuLightDefaultIcon from 'shared/assets/icons/burger-menu-light-default.svg';
import burgerMenuDarkActiveIcon from 'shared/assets/icons/burger-menu-dark-active.svg';
import burgerMenuDarkDefaultIcon from 'shared/assets/icons/burger-menu-dark-default.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import logoLightMobileIcon from 'shared/assets/icons/logo-light-mobile.svg';
import logoDarkMobileIcon from 'shared/assets/icons/logo-dark-mobile.svg';
import { HStack } from 'shared/ui/Stack';
import { BurgerMenuMobile } from 'shared/ui/Popups/BurgerMenu/MobileView/BurgerMenuMobile/BurgerMenuMobile';
import cls from './HeaderMobile.module.scss';
import { getCooperationMenu } from '../../../model/selectors/headerNavigatorMenus/getCooperationMenu';
import { getScienceMenu } from '../../../model/selectors/headerNavigatorMenus/getScienceMenu';
import { getForStudentsMenu } from '../../../model/selectors/headerNavigatorMenus/getForStudentsMenu';
import { getForApplicantsMenu } from '../../../model/selectors/headerNavigatorMenus/getForApplicantsMenu';
import { getUniversityMenu } from '../../../model/selectors/headerNavigatorMenus/getUniversityMenu';

export enum HeaderMobileTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderMobileProps {
    className?: string;
}

export const HeaderMobile = memo((props: HeaderMobileProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const universityMenuData = getUniversityMenu();
    const forApplicantsMenuData = getForApplicantsMenu();
    const forStudentsMenuData = getForStudentsMenu();
    const scienceMenuData = getScienceMenu();
    const cooperationMenu = getCooperationMenu();
    const [headerTheme, setHeaderTheme] = useState<HeaderMobileTheme>(HeaderMobileTheme.DARK);
    const [isOpenBurgerMenu, bindBurgerMenu] = useModal();

    useEffect(() => {
        if (isOpenBurgerMenu) {
            document.body.classList.add('burger-menu-open-body');
        } else {
            document.body.classList.remove('burger-menu-open-body');
        }
    }, [isOpenBurgerMenu]);

    const burgerMenuLightIconsToggle = useMemo(
        () => (isOpenBurgerMenu ? burgerMenuLightActiveIcon : burgerMenuLightDefaultIcon),
        [isOpenBurgerMenu],
    );
    const burgerMenuDarkIconsToggle = useMemo(
        () => (isOpenBurgerMenu ? burgerMenuDarkActiveIcon : burgerMenuDarkDefaultIcon),
        [isOpenBurgerMenu],
    );

    const classes = [
        className,
        cls[headerTheme],
    ];

    return (
        <header
            className={classNames(cls.HeaderMobile, {}, classes)}
        >
            <HStack
                maxW
                maxH
                justify="between"
                align="center"
            >
                <AppLink
                    theme={AppLinkTheme.CLEAN}
                    to={RoutePath.main}
                >
                    <Icon
                        className={cls.logo}
                        Svg={headerTheme === HeaderMobileTheme.LIGHT
                            ? logoLightMobileIcon
                            : logoDarkMobileIcon}
                        theme={IconTheme.CLEAN}
                    />
                </AppLink>
                <HStack
                    gap="15"
                    align="center"
                >
                    <Icon
                        Svg={headerTheme === HeaderMobileTheme.LIGHT
                            ? burgerMenuLightIconsToggle
                            : burgerMenuDarkIconsToggle}
                        theme={IconTheme.CLEAN}
                        isClickable
                        onClick={bindBurgerMenu.onShowModal}
                    />
                    <BurgerMenuMobile
                        isOpen={isOpenBurgerMenu}
                        onClose={bindBurgerMenu.onCloseModal}
                        data={[universityMenuData,
                            forApplicantsMenuData,
                            forStudentsMenuData,
                            scienceMenuData,
                            cooperationMenu]}
                    />
                </HStack>
            </HStack>
        </header>
    );
});
