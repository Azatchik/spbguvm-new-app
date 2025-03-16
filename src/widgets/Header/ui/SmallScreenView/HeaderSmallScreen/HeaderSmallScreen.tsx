import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
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
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ThemeSwitcherTheme } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
    const [headerTheme, setHeaderTheme] = useState<HeaderSmallScreenTheme>(HeaderSmallScreenTheme.DARK);

    return (
        <header
            className={classNames(cls.HeaderSmallScreen, {}, [className, cls[headerTheme]])}
            id={HEADER_SMALL_SCREEN_ID}
        >
            <HStack
                className={cls.headerWrapper}
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
                        isDisabled={false}
                    />
                    <LangSwitcher theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                        ? LangSwitcherTheme.LIGHT
                        : LangSwitcherTheme.DARK}
                    />
                    <Icon
                        Svg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? burgerMenuLightDefaultIcon
                            : burgerMenuDarkDefaultIcon}
                        HoveredSvg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? burgerMenuLightActiveIcon
                            : burgerMenuDarkActiveIcon}
                        theme={IconTheme.CLEAN}
                        isDisabled={false}
                    />
                </HStack>
            </HStack>
        </header>
    );
});
