import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, useEffect, useMemo, useState,
} from 'react';
import { HStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import logoDarkSmallScreenIcon from 'shared/assets/icons/logo-dark-smallscreen.svg';
import logoLightSmallScreenIcon from 'shared/assets/icons/logo-light-smallscreen.svg';
import searchDarkDefaultIcon from 'shared/assets/icons/search-dark-default.svg';
import searchLightDefaultIcon from 'shared/assets/icons/search-light-default.svg';
import searchDarkHoveredIcon from 'shared/assets/icons/search-dark-hovered.svg';
import searchLightHoveredIcon from 'shared/assets/icons/search-light-hovered.svg';
import burgerMenuDarkDefaultIcon from 'shared/assets/icons/burger-menu-dark-default.svg';
import burgerMenuLightDefaultIcon from 'shared/assets/icons/burger-menu-light-default.svg';
import burgerMenuDarkActiveIcon from 'shared/assets/icons/burger-menu-dark-active.svg';
import burgerMenuLightActiveIcon from 'shared/assets/icons/burger-menu-light-active.svg';
import { LangSwitcher, LangSwitcherTheme } from 'widgets/LangSwitcher';
import { ThemeSwitcher, ThemeSwitcherTheme } from 'widgets/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { BurgerMenuSmallScreen } from 'shared/ui/Popups/BurgerMenu/SmallScreenView/BurgerMenuSmallScreen/BurgerMenuSmallScreen';
import { getUniversityMenu } from '../../../model/selectors/headerNavigatorMenus/getUniversityMenu';
import { getForApplicantsMenu } from '../../../model/selectors/headerNavigatorMenus/getForApplicantsMenu';
import { getForStudentsMenu } from '../../../model/selectors/headerNavigatorMenus/getForStudentsMenu';
import { getScienceMenu } from '../../../model/selectors/headerNavigatorMenus/getScienceMenu';
import { getCooperationMenu } from '../../../model/selectors/headerNavigatorMenus/getCooperationMenu';
import cls from './HeaderSmallScreen.module.scss';

export enum HeaderSmallScreenTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderSmallScreenProps {
    className?: string;
}

export const HEADER_SMALL_SCREEN_ID = 'HEADER_SMALL_SCREEN_ID';

export const HeaderSmallScreen = memo((props: HeaderSmallScreenProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const universityMenuData = getUniversityMenu();
    const forApplicantsMenuData = getForApplicantsMenu();
    const forStudentsMenuData = getForStudentsMenu();
    const scienceMenuData = getScienceMenu();
    const cooperationMenu = getCooperationMenu();
    const [headerTheme, setHeaderTheme] = useState<HeaderSmallScreenTheme>(HeaderSmallScreenTheme.DARK);
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

    const mods: Mods = {
        [cls.isOpenBurgerMenu]: isOpenBurgerMenu,
    };

    const classes = [
        className,
        cls[headerTheme],
    ];

    return (
        <header
            className={classNames(cls.HeaderSmallScreen, mods, classes)}
            id={HEADER_SMALL_SCREEN_ID}
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
                        Svg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? logoLightSmallScreenIcon
                            : logoDarkSmallScreenIcon}
                        theme={IconTheme.CLEAN}
                    />
                </AppLink>
                <HStack
                    gap="15"
                    align="center"
                >
                    <ThemeSwitcher
                        theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? ThemeSwitcherTheme.LIGHT
                            : ThemeSwitcherTheme.DARK}
                    />
                    <Icon
                        Svg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? searchLightDefaultIcon
                            : searchDarkDefaultIcon}
                        HoveredSvg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? searchLightHoveredIcon
                            : searchDarkHoveredIcon}
                        theme={IconTheme.CLEAN}
                    />
                    <LangSwitcher theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                        ? LangSwitcherTheme.LIGHT
                        : LangSwitcherTheme.DARK}
                    />
                    <Icon
                        Svg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? burgerMenuLightIconsToggle
                            : burgerMenuDarkIconsToggle}
                        theme={IconTheme.CLEAN}
                        isClickable
                        onClick={bindBurgerMenu.onShowModal}
                    />
                    <BurgerMenuSmallScreen
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
