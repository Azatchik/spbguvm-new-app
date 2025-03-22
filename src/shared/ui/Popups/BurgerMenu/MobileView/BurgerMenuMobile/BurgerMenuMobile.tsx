import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useEffect } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import vkIconWhite from 'shared/assets/icons/vk-icon-white.svg';
import vkIconWhiteHovered from 'shared/assets/icons/vk-icon-white-hovered.svg';
import telegramIconWhite from 'shared/assets/icons/telegram-icon-white.svg';
import telegramIconWhiteHovered from 'shared/assets/icons/telegram-icon-white-hovered.svg';
import rutubeIconWhite from 'shared/assets/icons/rutube-icon-white.svg';
import rutubeIconWhiteHovered from 'shared/assets/icons/rutube-icon-white-hovered.svg';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Transition } from 'react-transition-group';
import { LangSwitcher, LangSwitcherTheme } from 'widgets/LangSwitcher';
import { ThemeSwitcher, ThemeSwitcherTheme } from 'widgets/ThemeSwitcher';
import searchLightDefaultIcon from 'shared/assets/icons/search-light-default.svg';
import searchLightHoveredIcon from 'shared/assets/icons/search-light-hovered.svg';
import { BurgerMenuSpoilerMobile } from '../BurgerMenuSpoilerMobile/BurgerMenuSpoilerMobile';
import cls from './BurgerMenuMobile.module.scss';

interface Subsection {
    name: string;
    link: string;
}

interface MainSection {
    name: string;
    link: string;
    subsections: Subsection[];
}

interface Section {
    [key: string]: MainSection;
}

interface MenuData {
    title: string;
    section1: Section;
    section2?: Section;
    section3?: Section;
}

interface BurgerMenuMobileProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    data?: MenuData[];
}

export const BurgerMenuMobile = memo((props: BurgerMenuMobileProps) => {
    const {
        className,
        data,
        isOpen,
        onClose,
        lazy = true,
    } = props;
    const { t } = useTranslation();

    if (!data) return null;

    const closeHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Transition
            in={isOpen}
            timeout={300}
            unmountOnExit
            mountOnEnter
        >
            {(state) => {
                const transitionStates = {
                    entering: cls.burgerMenuMobileEntering,
                    entered: cls.burgerMenuMobileEntered,
                    exiting: cls.burgerMenuMobileExiting,
                    exited: cls.burgerMenuMobileExited,
                    unmounted: cls.burgerMenuMobileUnmounted,
                };

                return (
                    <Portal>
                        <div className={classNames(cls.BurgerMenuMobile, {}, [className, transitionStates[state]])}>
                            <div
                                className={cls.overlay}
                                onClick={closeHandler}
                            >
                                <div
                                    className={cls.content}
                                    onClick={onContentClick}
                                >
                                    <VStack
                                        className={cls.contentWrapper}
                                        maxW
                                        maxH
                                        justify="between"
                                        gap="50"
                                    >
                                        <VStack
                                            className={cls.spoilersWrapper}
                                            maxW
                                        >
                                            {data.map((menu) => (
                                                <BurgerMenuSpoilerMobile
                                                    data={menu}
                                                />
                                            ))}
                                        </VStack>
                                        <VStack
                                            maxW
                                            gap="20"
                                        >
                                            <HStack
                                                gap="20"
                                            >
                                                <ThemeSwitcher
                                                    theme={ThemeSwitcherTheme.LIGHT}
                                                    isMobile
                                                />
                                                <Icon
                                                    Svg={searchLightDefaultIcon}
                                                    HoveredSvg={searchLightHoveredIcon}
                                                    theme={IconTheme.CLEAN}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                                <LangSwitcher
                                                    theme={LangSwitcherTheme.LIGHT}
                                                />
                                            </HStack>
                                            <AppLink
                                                theme={AppLinkTheme.NAVIGATOR_OPACITY_LIGHT}
                                                to="#"
                                            >
                                                {t('Контакты')}
                                            </AppLink>
                                            <AppLink
                                                theme={AppLinkTheme.NAVIGATOR_OPACITY_LIGHT}
                                                to="#"
                                            >
                                                {t('Медиа-центр')}
                                            </AppLink>
                                            <AppLink
                                                theme={AppLinkTheme.NAVIGATOR_OPACITY_LIGHT}
                                                to="#"
                                            >
                                                {t('Нормативные документы')}
                                            </AppLink>
                                            <Button
                                                theme={ButtonTheme.PRIMARY_WHITE_FILL}
                                                arrowPosition={ArrowPosition.ARROW_RIGHT}
                                                width="200"
                                            >
                                                {t('Приемная кампания')}
                                            </Button>
                                            <HStack
                                                gap="15"
                                            >
                                                <Link
                                                    theme={LinkTheme.CLEAN}
                                                    href="https://vk.com/spbguvm"
                                                >
                                                    <Icon
                                                        Svg={vkIconWhite}
                                                        HoveredSvg={vkIconWhiteHovered}
                                                        theme={IconTheme.CLEAN}
                                                    />
                                                </Link>
                                                <Link
                                                    theme={LinkTheme.CLEAN}
                                                    href="https://t.me/spbguvmofficial"
                                                >
                                                    <Icon
                                                        Svg={telegramIconWhite}
                                                        HoveredSvg={telegramIconWhiteHovered}
                                                        theme={IconTheme.CLEAN}
                                                    />
                                                </Link>
                                                <Link
                                                    theme={LinkTheme.CLEAN}
                                                    href="https://rutube.ru/channel/23637865/"
                                                >
                                                    <Icon
                                                        Svg={rutubeIconWhite}
                                                        HoveredSvg={rutubeIconWhiteHovered}
                                                        theme={IconTheme.CLEAN}
                                                    />
                                                </Link>
                                            </HStack>
                                        </VStack>
                                    </VStack>
                                </div>
                            </div>
                        </div>
                    </Portal>
                );
            }}
        </Transition>
    );
});
