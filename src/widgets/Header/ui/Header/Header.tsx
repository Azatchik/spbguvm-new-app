import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
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
import { HeaderNavigator, HeaderNavigatorTheme } from '../HeaderNavigator/HeaderNavigator';
import cls from './Header.module.scss';

export enum HeaderTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderProps {
    className?: string;
    headerTheme: HeaderTheme;
}

export const Header = memo((props: HeaderProps) => {
    const { className, headerTheme } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Header, {}, [className, cls[headerTheme]])}>
            <VStack className={cls.headerWrapper}>
                <HStack
                    className={cls.mainPanel}
                    justify="between"
                    align="center"
                >
                    <HStack className={cls.links} gap="24">
                        <AppLink
                            theme={headerTheme === HeaderTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Контакты')}
                        </AppLink>
                        <AppLink
                            theme={headerTheme === HeaderTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Медиа-центр')}
                        </AppLink>
                        <AppLink
                            theme={headerTheme === HeaderTheme.LIGHT
                                ? AppLinkTheme.HEADER_LIGHT
                                : AppLinkTheme.HEADER_DARK}
                            to="#"
                        >
                            {t('Нормативные документы')}
                        </AppLink>
                    </HStack>
                    <Icon
                        className={cls.logo}
                        Svg={headerTheme === HeaderTheme.LIGHT
                            ? logoLightDesktopIcon
                            : logoDarkDesktopIcon}
                        theme={IconTheme.CLEAN}
                    />
                    <HStack className={cls.tools} gap="16">
                        <ThemeSwitcher
                            theme={headerTheme === HeaderTheme.LIGHT
                                ? ThemeSwitcherTheme.LIGHT
                                : ThemeSwitcherTheme.DARK}
                        />
                        <Icon
                            Svg={headerTheme === HeaderTheme.LIGHT
                                ? searchLightDefaultIcon
                                : searchDarkDefaultIcon}
                            HoveredSvg={headerTheme === HeaderTheme.LIGHT
                                ? searchLightHoveredIcon
                                : searchDarkHoveredIcon}
                            theme={IconTheme.CLEAN}
                            style={{ cursor: 'pointer' }}
                        />
                        <LangSwitcher theme={headerTheme === HeaderTheme.LIGHT
                            ? LangSwitcherTheme.LIGHT
                            : LangSwitcherTheme.DARK}
                        />
                        <Button
                            theme={headerTheme === HeaderTheme.LIGHT
                                ? ButtonTheme.PRIMARY_WHITE_FILL
                                : ButtonTheme.PRIMARY_BLUE_FILL}
                            arrowPosition={ArrowPosition.ARROW_RIGHT}
                            width="200"
                        >
                            {t('Приемная кампания')}
                        </Button>
                    </HStack>
                </HStack>
                <HeaderNavigator
                    theme={headerTheme === HeaderTheme.LIGHT
                        ? HeaderNavigatorTheme.LIGHT
                        : HeaderNavigatorTheme.DARK}
                />
            </VStack>
        </div>
    );
});
