import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import logoDarkDesktopIcon from 'shared/assets/icons/logo-dark-desktop.svg';
import logoLightDesktopIcon from 'shared/assets/icons/logo-light-desktop.svg';
import searchDarkDefaultIcon from 'shared/assets/icons/search-dark-default.svg';
import searchLightDefaultIcon from 'shared/assets/icons/search-light-default.svg';
import searchDarkHoveredIcon from 'shared/assets/icons/search-dark-hovered.svg';
import searchLightHoveredIcon from 'shared/assets/icons/search-light-hovered.svg';
import { LangSwitcher, LangSwitcherTheme } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ThemeSwitcherTheme } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import {
    HeaderNavigatorSmallScreen,
} from '../HeaderNavigatorSmallScreen/HeaderNavigatorSmallScreen';
import cls from './HeaderSmallScreen.module.scss';

export enum HeaderSmallScreenTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderSmallScreenProps {
    className?: string;
}

export const HEADER_ID = 'HEADER_ID';

export const HeaderSmallScreen = memo((props: HeaderSmallScreenProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const [headerTheme, setHeaderTheme] = useState<HeaderSmallScreenTheme>(HeaderSmallScreenTheme.DARK);

    return (
        <header
            className={classNames(cls.HeaderSmallScreen, {}, [className, cls[headerTheme]])}
            id={HEADER_ID}
        >
            <VStack className={cls.headerWrapper}>
                <HStack
                    className={cls.mainPanel}
                    justify="between"
                    align="center"
                >
                    <HStack className={cls.links} gap="24">
                        <AppLink
                            theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Контакты')}
                        </AppLink>
                        <AppLink
                            theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Медиа-центр')}
                        </AppLink>
                        <AppLink
                            theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Нормативные документы')}
                        </AppLink>
                    </HStack>
                    <Icon
                        className={cls.logo}
                        Svg={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? logoLightDesktopIcon
                            : logoDarkDesktopIcon}
                        theme={IconTheme.CLEAN}
                    />
                    <HStack className={cls.tools} gap="16">
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
                            style={{ cursor: 'pointer' }}
                        />
                        <LangSwitcher theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                            ? LangSwitcherTheme.LIGHT
                            : LangSwitcherTheme.DARK}
                        />
                        <Button
                            theme={headerTheme === HeaderSmallScreenTheme.LIGHT
                                ? ButtonTheme.PRIMARY_WHITE_FILL
                                : ButtonTheme.PRIMARY_BLUE_FILL}
                            arrowPosition={ArrowPosition.ARROW_RIGHT}
                            width="200"
                        >
                            {t('Приемная кампания')}
                        </Button>
                    </HStack>
                </HStack>
                <HeaderNavigatorSmallScreen />
            </VStack>
        </header>
    );
});
