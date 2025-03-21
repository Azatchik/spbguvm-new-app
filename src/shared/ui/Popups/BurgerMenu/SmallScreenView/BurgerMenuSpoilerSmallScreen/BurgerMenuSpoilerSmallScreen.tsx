import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import arrowSpoilerDownIcon from 'shared/assets/icons/arrow-spoiler-down.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Transition } from 'react-transition-group';
import React, {
    memo, useCallback, useState,
} from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './BurgerMenuSpoilerSmallScreen.module.scss';

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

interface BurgerMenuSpoilerSmallScreenProps {
    className?: string;
    data?: MenuData;
}

export const BurgerMenuSpoilerSmallScreen = memo((props: BurgerMenuSpoilerSmallScreenProps) => {
    const {
        className,
        data,
    } = props;
    const { t } = useTranslation();
    const [spoilerIsOpen, setSpoilerIsOpen] = useState<boolean>(false);

    const onToggleSpoiler = useCallback(() => {
        setSpoilerIsOpen((prevState) => !prevState);
    }, []);

    if (!data) return null;

    return (
        <VStack
            className={classNames(cls.BurgerMenuSpoilerSmallScreen, {}, [className])}
            maxW
        >
            <HStack
                maxW
                justify="between"
                align="center"
                onClick={onToggleSpoiler}
                className={cls.spoilerSummary}
            >
                <Text
                    theme={TextTheme.NAVIGATOR_UNDERLINE_LIGHT}
                    size={TextSize.MENU_CAPS_DESKTOP}
                >
                    {t(data.title.toUpperCase())}
                </Text>
                <Icon
                    Svg={arrowSpoilerDownIcon}
                    theme={IconTheme.CLEAN}
                    isClickable
                    className={classNames(cls.arrowDownIcon, { [cls.arrowUp]: spoilerIsOpen }, [])}
                />
            </HStack>

            <Transition
                in={spoilerIsOpen}
                timeout={300}
                unmountOnExit
                mountOnEnter
            >
                {(state) => {
                    const transitionStates = {
                        entered: cls.spoilerContentEntered,
                        entering: cls.spoilerContentEntering,
                        exiting: cls.spoilerContentExiting,
                        exited: cls.spoilerContentExited,
                        unmounted: cls.spoilerContentUnmounted,
                    };

                    return (
                        <VStack
                            className={`${cls.spoilerContent} ${transitionStates[state]}`}
                            gap="15"
                            maxW
                        >
                            {data.section1 && (
                                <VStack
                                    className={cls.sectionMain}
                                    maxH
                                    gap="8"
                                >
                                    {Object.values(data.section1).map((section) => (
                                        <VStack
                                            gap={section.subsections.length > 0 ? '6' : undefined}
                                            maxW
                                        >
                                            <AppLink
                                                theme={AppLinkTheme.BURGER_MENU_MAIN_LINK_SPOILER}
                                                to={section.link}
                                            >
                                                {t(section.name)}
                                            </AppLink>
                                            {!!section.subsections.length && (
                                                <VStack
                                                    maxW
                                                    className={cls.subsections}
                                                    gap="12"
                                                >
                                                    {section.subsections.map((subsection) => (
                                                        <AppLink
                                                            theme={AppLinkTheme.BURGER_MENU_SUBSECTION_LINK_SPOILER}
                                                            to={subsection.link}
                                                            className={cls.subsection}
                                                        >
                                                            {t(subsection.name)}
                                                        </AppLink>
                                                    ))}
                                                </VStack>
                                            )}
                                        </VStack>
                                    ))}
                                </VStack>
                            )}
                            {data.section2 && (
                                <VStack
                                    className={cls.sectionMain}
                                    maxH
                                    gap="8"
                                >
                                    {Object.values(data.section2).map((section) => (
                                        <VStack
                                            gap={section.subsections.length > 0 ? '6' : undefined}
                                            maxW
                                        >
                                            <AppLink
                                                theme={AppLinkTheme.BURGER_MENU_MAIN_LINK_SPOILER}
                                                to={section.link}
                                            >
                                                {t(section.name)}
                                            </AppLink>
                                            {!!section.subsections.length && (
                                                <VStack
                                                    maxW
                                                    className={cls.subsections}
                                                    gap="12"
                                                >
                                                    {section.subsections.map((subsection) => (
                                                        <AppLink
                                                            theme={AppLinkTheme.BURGER_MENU_SUBSECTION_LINK_SPOILER}
                                                            to={subsection.link}
                                                            className={cls.subsection}
                                                        >
                                                            {t(subsection.name)}
                                                        </AppLink>
                                                    ))}
                                                </VStack>
                                            )}
                                        </VStack>
                                    ))}
                                </VStack>
                            )}
                            {data.section3 && (
                                <VStack
                                    className={cls.sectionMain}
                                    maxH
                                    gap="8"
                                >
                                    {Object.values(data.section3).map((section) => (
                                        <VStack
                                            gap={section.subsections.length > 0 ? '6' : undefined}
                                            maxW
                                        >
                                            <AppLink
                                                theme={AppLinkTheme.BURGER_MENU_MAIN_LINK_SPOILER}
                                                to={section.link}
                                            >
                                                {t(section.name)}
                                            </AppLink>
                                            {!!section.subsections.length && (
                                                <VStack
                                                    maxW
                                                    className={cls.subsections}
                                                    gap="12"
                                                >
                                                    {section.subsections.map((subsection) => (
                                                        <AppLink
                                                            theme={AppLinkTheme.BURGER_MENU_SUBSECTION_LINK_SPOILER}
                                                            to={subsection.link}
                                                            className={cls.subsection}
                                                        >
                                                            {t(subsection.name)}
                                                        </AppLink>
                                                    ))}
                                                </VStack>
                                            )}
                                        </VStack>
                                    ))}
                                </VStack>
                            )}
                        </VStack>
                    );
                }}
            </Transition>
        </VStack>
    );
});
